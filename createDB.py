import requests
from pymongo import MongoClient
import time

# MongoDB connection
uri = "mongodb+srv://test:test1234@anime.umwgmbd.mongodb.net/"
client = MongoClient(uri)
db = client.get_database("anime")
collection = db["anime_map"]  # new collection

# AniList API endpoint
url = "https://graphql.anilist.co"

query = """
query ($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      hasNextPage
    }
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      idMal
      title {
        romaji
        english
        native
      }
      description(asHtml: false)
      genres
      tags {
        name
        rank
      }
      averageScore
      popularity
      episodes
      season
      seasonYear
    }
  }
}
"""

page = 1
per_page = 50  # AniList allows up to 50 per query

while True:
    variables = {"page": page, "perPage": per_page}
    response = requests.post(url, json={"query": query, "variables": variables})
    response.raise_for_status()
    result = response.json()

    media_list = result["data"]["Page"]["media"]
    if not media_list:
        break

    # Insert each anime into MongoDB
    for media in media_list:
        doc = {
            "anilist_id": media["id"],
            "mal_id": media["idMal"],
            "title": media["title"],
            "description": media["description"],
            "genres": media["genres"],
            "tags": [tag["name"] for tag in media["tags"]],
            "averageScore": media["averageScore"],
            "popularity": media["popularity"],
            "episodes": media["episodes"],
            "season": media["season"],
            "seasonYear": media["seasonYear"],
        }
        collection.update_one(
            {"anilist_id": media["id"]}, {"$set": doc}, upsert=True
        )
        print(f"✅ Inserted {media['title']['romaji']}")

    if not result["data"]["Page"]["pageInfo"]["hasNextPage"]:
        break

    page += 1
    time.sleep(1)  # rate limit safety

print("🎉 Finished populating anime_map collection!")
