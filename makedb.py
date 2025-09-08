from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

# Replace with your actual connection string from Atlas
connection_string = "mongodb+srv://deandrebaileyisaiah_db_user:Sakura43@anime.umwgmbd.mongodb.net/"

try:
    client = MongoClient(connection_string)
    client.admin.command('ping')
    print("✅ MongoDB Atlas connected successfully!")
except Exception as e:
    print(f"❌ Error connecting to Atlas: {e}")