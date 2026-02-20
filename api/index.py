import numpy as np
import pandas as pd
import sklearn
import warnings
from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS #necessary for cross-origin requests from frontend to backend in development
warnings.simplefilter(action='ignore', category=FutureWarning)

uri = "mongodb+srv://test:test1234@anime.umwgmbd.mongodb.net/"
client = MongoClient(uri)
db = client.get_database('anime')

# DATABASE
rating_docs = list(db.ratings.find({}, {'_id': 0}))
movie_docs = list(db.anime_anilist.find({}, {'_id': 0}))

ratings = pd.DataFrame(rating_docs)
animes = pd.DataFrame(movie_docs)

print(ratings.head())
print(animes.head())

# TEST AND MATRIX

n_ratings = len(ratings)
n_movies = len(ratings['anime_id'].unique())
n_users = len(ratings['user_id'].unique())

#print(f"Number of ratings: {n_ratings}")
#print(f"Number of unique anime_id's: {n_movies}")
#print(f"Number of unique users: {n_users}")

#user_freq = ratings[['user_id','anime_id']].groupby('user_id').count().reset_index()
#user_freq.columns = ['user_id','n_ratings']
#print(user_freq.head())

#mean_rating = ratings.groupby('anime_id')[['rating']].mean()
#lowest_rated = mean_rating['rating'].idxmin()
#animes.loc[animes['anime_id'] == lowest_rated]
#highest_rated = mean_rating['rating'].idxmax()
#animes.loc[animes['anime_id'] == highest_rated]
#ratings[ratings['anime_id']==highest_rated]
#ratings[ratings['anime_id']==lowest_rated]

#movie_stats = ratings.groupby('anime_id')[['rating']].agg(['count', 'mean'])
#movie_stats.columns = movie_stats.columns.droplevel()

from scipy.sparse import csr_matrix

def create_matrix(df):
    
    N = len(df['user_id'].unique())
    M = len(df['anime_id'].unique())
 
    user_mapper = dict(zip(np.unique(df["user_id"]), list(range(N))))
    movie_mapper = dict(zip(np.unique(df["anime_id"]), list(range(M))))
 
    user_inv_mapper = dict(zip(list(range(N)), np.unique(df["user_id"])))
    movie_inv_mapper = dict(zip(list(range(M)), np.unique(df["anime_id"])))
    
    user_index = [user_mapper[i] for i in df['user_id']]
    movie_index = [movie_mapper[i] for i in df['anime_id']]

    X = csr_matrix((df["rating"], (movie_index, user_index)), shape=(M, N))
    
    return X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper
    
X, user_mapper, movie_mapper, user_inv_mapper, movie_inv_mapper = create_matrix(ratings)

from sklearn.neighbors import NearestNeighbors

def find_similar_animes(movie_id, X, k, metric='cosine', show_distance=False):
    neighbour_ids = []
    
    if movie_id not in movie_mapper:
        print(f"Movie ID {movie_id} not found in movie_mapper!")
        return []

    movie_ind = movie_mapper[movie_id]
    movie_vec = X[movie_ind]
    k += 1  
    kNN = NearestNeighbors(n_neighbors=k, algorithm="brute", metric=metric)
    kNN.fit(X)
    movie_vec = movie_vec.reshape(1, -1)
    neighbour = kNN.kneighbors(movie_vec, return_distance=show_distance)
    
    for i in range(0, k):
        n = neighbour.item(i)
        neighbour_ids.append(movie_inv_mapper[n])
    
    neighbour_ids.pop(0) 
    return neighbour_ids

# RECOMMENDATION FUNCTIONS (First one not necessary right now need to be changed to recommend based on anime_id input)
def recommend_animes_for_user(user_id, X, user_mapper, anime_mapper, anime_inv_mapper, k=10):
    df1 = ratings[ratings['user_id'] == user_id]

    anime_id = df1[df1['rating'] == max(df1['rating'])]['anime_id'].iloc[0]

    anime_titles = dict(zip(animes['anime_id'], animes['Name']))

    similar_ids = find_similar_animes(anime_id, X, k)

    print(f"Since you watched {anime_titles[anime_id]}, you might also like:")

    for i in similar_ids:
        if i in anime_titles:
            print(anime_titles[i])

def recommend_animes_for_anime(anime_id, X, user_mapper, movie_mapper, movie_inv_mapper, k=10):

    movie_id = anime_id

    anime_titles = dict(zip(animes['anime_id'], animes['Name']))

    similar_ids = find_similar_animes(movie_id, X, k)

    print(f"Since you watched {anime_titles[movie_id]}, you might also like:")

    #simply print titles of recommended animes
    for i in similar_ids:
        if i in anime_titles:
            print(anime_titles[i])

    #returns full details of recommended animes
    recommended = animes[animes['anime_id'].isin(similar_ids)].to_dict(orient="records")

    return recommended

user_id = 558 
#recommend_animes_for_user(user_id, X, user_mapper, movie_mapper, movie_inv_mapper, k=10)
recommend_animes_for_anime(170, X, user_mapper, movie_mapper, movie_inv_mapper, k=10)


# ---------------- Flask setup ----------------
app = Flask(__name__) # Initialize Flask app listens for requests and routes them to appropriate functions
CORS(app) # Enable CORS for the Flask app
# ... (all your existing Python code) ...

# NEW function to find an anime_id from a title
def get_anime_id_from_title(title_str):
    # Case-insensitive search for the title
    result = animes[animes['Name'].str.contains(title_str, case=False, na=False)]
    if not result.empty:
        return result.iloc[0]['anime_id']
    return None

# --- Updated Flask Route ---
@app.route("/recommend", methods=["GET"])
def recommend_anime():
    title = request.args.get('title') # Get title from query parameter ?title=...
    if not title:
        return jsonify({"error": "Title parameter is required"}), 400

    anime_id = get_anime_id_from_title(title)
    if anime_id is None:
        return jsonify({"error": f"Anime '{title}' not found"}), 404

    # Get the collaborative filtering recommendations
    recs = recommend_animes_for_anime(anime_id, X, user_mapper, movie_mapper, movie_inv_mapper, k=10)
    
    # Return a clean list of recommendations with just the data we need
    response_data = []
    for rec in recs:
        response_data.append({
            '_id': rec.get('anime_id'), # Use anime_id as the primary identifier
            'title': {'english': rec.get('Name')},
            'genres': rec.get('Genres', '').split(', ')
        })

    return jsonify(response_data)


if __name__ == "__main__":
    app.run(debug=True, port=5000)

#run python main.py to start the Flask server
#open browsert to http://127.0.0.1:5000/recommend/anime/??? where ??? is a valid anime_id to see the recommendations for that anime