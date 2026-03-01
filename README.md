# 🎌 Animore+ (Hybrid Anime Discovery Engine)

Animore+ is a high-performance, full-stack recommendation platform that maps the relationship between thousands of anime titles. It moves beyond simple keyword matching by combining **Collaborative Filtering** (user behavior) with **Semantic Vector Search** (thematic meaning).



## 🚀 Key Features
* **Hybrid Recommendation Engine:** Blends "Users who watched X also liked Y" with "Thematic similarity" using Sentence-Transformers.
* **Distributed Architecture:** Decoupled Flask ML microservice and Next.js hydration layer.
* **3D Latent Space Map:** (In-Progress) Visualizing the anime universe using **UMAP** dimensionality reduction and **React Three Fiber**.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), Tailwind CSS, Framer Motion |
| **Backend (API)** | Next.js Route Handlers (Node.js), Flask (Python) |
| **Database** | MongoDB Atlas (NoSQL) |
| **ML/Vector Ops** | Sentence-Transformers (`all-MiniLM-L6-v2`), FAISS, UMAP, Scipy |
| **Data Science** | Pandas, Numpy, Scikit-Learn |

---

## 🏗️ Architecture: The Hybrid Pipeline

The system operates in three distinct phases to ensure speed and accuracy:

### 1. Offline Batch Processing
To save memory and CPU, we pre-calculate the Collaborative Filtering matrix.
* Processes 1M+ ratings from `user-filtered.csv`.
* Uses K-Nearest Neighbors (KNN) to find user-overlap candidates.
* **Result:** Injects a `collab_candidates` array directly into each MongoDB document.

### 2. Semantic Embedding
* Cleans and "weights" metadata (Genres, Studios, Descriptions) into a "Metadata Soup."
* Encodes text into **384-dimensional vectors** using Sentence-BERT.
* Stores these vectors in MongoDB and indexes them via **FAISS** for $O(\log N)$ search speeds.

### 3. Online Hydration (Next.js)
* The Flask microservice returns raw IDs.
* The Next.js `/api/anime/hydrate` route fetches the full metadata (Images, Scores, Synopses) from MongoDB to render the UI instantly.



---

## 🚦 Getting Started

### Prerequisites
* Node.js 18+
* Python 3.10+
* MongoDB Atlas Account

### Backend Setup (Flask)
1.  Navigate to the API folder: `cd api`
2.  Create a virtual environment: `python3 -m venv venv && source venv/bin/activate`
3.  Install dependencies: `pip install -r requirements.txt`
4.  **Hydrate Collaborative Data:** ```bash
    python run_once_batch_job.py
    ```
5.  Start the ML server: `python app.py`

### Frontend Setup (Next.js)
1.  Install dependencies: `npm install`
2.  Configure `.env.local` with your `MONGODB_URI`.
3.  Start the development server: `npm run dev`

---

## 📂 Project Structure
```text
├── app/                  # Next.js App Router (Frontend + Hydration API)
├── components/           # React Components (Anime Cards, Search Bar)
├── api/                  # Python Flask Microservice
│   ├── run_once_batch_job.py # Offline candidate pre-calculation
│   ├── embed_anilist.py      # Vector embedding script
│   └── app.py                # Live Hybrid Recommendation API
└── lib/                  # MongoDB & Shared Utility functions
