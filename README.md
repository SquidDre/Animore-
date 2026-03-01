Unfinished Read.me
# 🎌 Animore+ (Hybrid Anime Discovery Engine)

Animore+ is a high-performance, containerized recommendation platform. It moves beyond simple keyword matching by combining **Collaborative Filtering** (user behavior) with **Semantic Vector Search** (thematic meaning) to map the complex relationships between thousands of anime titles.



---

## 🏗️ Architecture: The Hybrid Engine

The system uses a multi-stage pipeline to ensure recommendations are both mathematically accurate and contextually relevant, without overloading the live server:

1. **Collaborative Filtering (Offline Batch):** We pre-calculate a 1M+ user-item rating matrix. Using K-Nearest Neighbors (KNN), we identify "Users also watched" clusters and cache these as `collab_candidates` directly in MongoDB.
2. **Content-Based Filtering (Semantic):** We use **Sentence-Transformers** (`all-MiniLM-L6-v2`) to encode a custom "Metadata Soup" (weighted Titles + Genres + Studios + Descriptions) into 384-dimensional semantic vectors.
3. **Hybrid Reranking (Online):** When a user searches, the Flask API performs a highly optimized Cosine Similarity search on the semantic vectors using Numpy/Scipy, and blends the results with the cached collaborative data.
4. **Next.js Hydration:** To keep the ML service lightweight, Flask only returns an array of optimized IDs. The Next.js `/api/anime/hydrate` route fetches the rich metadata (images, scores, synopses) from MongoDB Atlas for immediate UI rendering.



---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), Tailwind CSS, Framer Motion, React Three Fiber |
| **Backend (ML)** | Flask (Python 3.10+), Gunicorn |
| **Backend (Web)** | Next.js API Routes (Node.js) |
| **Database** | MongoDB Atlas (NoSQL) |
| **DevOps** | Docker, Docker Compose |
| **Data Science** | Sentence-Transformers, Scikit-Learn, Pandas, Numpy, Scipy, UMAP |

---

## 🐳 Dockerized Environment

This project is fully containerized to ensure that complex Python C-extensions (like Numpy and Scipy) compile and execute perfectly across all environments (Mac, Windows, Linux).

### Services
* **`animore-web`**: The Next.js frontend (Port 3000).
* **`animore-api`**: The Flask ML microservice (Port 5000).

---

## 🚦 Getting Started

### Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
* A MongoDB Atlas Account and Cluster.

### 1. Environment Setup
Clone the repository and create a `.env` file in the root directory:
```bash
git clone [https://github.com/SquidDre/Animore-.git](https://github.com/SquidDre/Animore-.git)
cd Animore-

```
Create .env
```
MONGODB_URI=your_mongodb_atlas_connection_string
NEXT_PUBLIC_FLASK_API_URL=http://localhost:5000
```

2. Launch the Stack
Build and start the containers using Docker Compose. This will install all Node and Python dependencies automatically.


