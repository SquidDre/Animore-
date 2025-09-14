# 🎌 Animore+ Recommendation App

Animore+ is a **full-stack anime recommendation system** that lets users search for anime and get personalized recommendations.  
It combines a **Next.js frontend** with a **Flask backend** that runs a custom recommendation model.

---

## 🚀 Features
- 🔍 **Search Bar** – search anime by name (with autocomplete).  
- 🎥 **Anime Details** – shows anime information (genre, episodes, rating).  
- 🤝 **Recommendations** – click an anime to see recommended similar titles.  
- 🛠️ **Machine Learning Backend** – powered by a Python/Flask recommendation engine.  
- 📊 **MongoDB Integration** – stores anime data for search and retrieval.  

---

## 🖼️ Demo Flow
1. Type `"Naruto"` in the search bar.  
2. Results show matching anime titles from MongoDB.  
3. Click `"Naruto"`.  
4. The app fetches recommendations from Flask (`/recommend/anime/<id>`).  
5. A list of recommended animes with details appears below the search bar.  

---

## ⚙️ Tech Stack
### Frontend
- **Next.js (React, TypeScript)**
- TailwindCSS for styling

### Backend
- **Flask (Python)**
- Flask-CORS for cross-origin requests
- Custom recommendation system (`main.py`)

### Database
- **MongoDB Atlas** (cloud database)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/animore-plus.git
cd animore-plus
```

### 2️⃣ Install Frontend Dependencies
```bash
cd frontend   # if your Next.js app is inside /frontend
npm install
```

### 3️⃣ Environment Variables (Next.js)
Create a `.env.local` file in the **frontend** folder:

```env
MONGODB_URI=mongodb+srv://test:test1234@anime.umwgmbd.mongodb.net/anime?retryWrites=true&w=majority
```

### 4️⃣ Run Next.js
```bash
npm run dev
```
Frontend should be live at:  
👉 `http://localhost:3000`

---

### 5️⃣ Backend Setup (Flask)
1. Create a virtual environment:  
   ```bash
   python -m venv venv
   source venv/bin/activate   # Mac/Linux
   venv\Scripts\activate      # Windows
   ```

2. Install dependencies:  
   ```bash
   pip install flask flask-cors pymongo pandas scikit-learn
   ```

3. Run Flask:  
   ```bash
   python main.py
   ```

Flask should run at:  
👉 `http://127.0.0.1:5000`

---

## 🔗 API Endpoints
- **Search Recommendations by ID**  
  ```
  GET /recommend/anime/<anime_id>
  ```
  Example: `http://127.0.0.1:5000/recommend/anime/170`

- **Search Recommendations by Name** (optional if implemented)  
  ```
  GET /recommend/anime/name/<anime_name>
  ```

---

## 📌 To Do / Future Improvements
- [ ] Add fuzzy search for anime names (partial matches).  
- [ ] Better UI for displaying recommendations (cards with images).  
- [ ] Deploy Flask backend (e.g., Heroku, Railway).  
- [ ] Deploy frontend (Vercel/Netlify).  

---

## 👨‍💻 Author
Built by **[DeAndre Bailey]**  
Inspired by a love for anime + coding ❤️  
