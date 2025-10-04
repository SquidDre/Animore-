import requests
import time
from pymongo import MongoClient

# 🔹 Your MongoDB Atlas connection
uri = "mongodb+srv://deandrebaileyisaiah_db_user:Sakura43@anime.umwgmbd.mongodb.net/"
client = MongoClient(uri)

# Database and collection
db = client.get_database("anime")
collection = db["anime"]

url = "https://graphql.anilist.co"

query = """
query ($idMal: Int) {
  Media(idMal: $idMal, type: ANIME) {
    id
    idMal
    description(asHtml: false)
    genres
    tags {
      name
      rank
    }
  }
}
"""

for anime in collection.find():
    mal_id = anime.get("anime_id")
    if not mal_id:
        print("⚠️ Skipping document without anime_id")
        continue

    variables = {"idMal": int(mal_id)}

    try:
        response = requests.post(url, json={"query": query, "variables": variables})
        response.raise_for_status()  # Raises error if status != 200
        result = response.json()
    except Exception as e:
        print(f"❌ Request failed for MAL ID {mal_id}: {e}")
        continue

    # ✅ Handle AniList API error payload
    if "errors" in result:
        print(f"⚠️ AniList error for MAL ID {mal_id}: {result['errors']}")
        continue

    media = result.get("data", {}).get("Media")
    if media:
        update_data = {
            "anilist_id": media["id"],
            "description": media["description"],
            "genres": media["genres"],
            "tags": [tag["name"] for tag in media["tags"]],
        }

        collection.update_one({"anime_id": mal_id}, {"$set": update_data})
        print(f"✅ Updated anime {mal_id} with AniList tags")
    else:
        print(f"⚠️ No AniList match found for MAL ID {mal_id}")

    time.sleep(1)
