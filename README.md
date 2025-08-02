# 🚀 InternTask

A modern dashboard web app to manage interns, track donations, show leaderboards, and visualize achievements — built with React, Express, and MongoDB.

## 🌐 Live Links

- **Frontend (Vercel)**: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend (Render)**: [https://your-backend.onrender.com](https://your-backend.onrender.com)

---

## 🔐 Test Login Credentials

Since Signup doesn't currently create accounts, use one of the pre-existing users for testing:

| Intern Name       | Password   |
|-------------------|------------|
| `Biswayan Paul`   | `12345678` |
| `Intern1`         | `12345678` |
| `Ayan Das`        | `12345678` |

**⚠️ Note**: You must type the exact name used in the backend while logging in.

---

## 🧠 Features

### ✅ Core Features
- 📥 **Login / Logout / Dashboard**  
- 📈 **Leaderboard** sorted by total donations  
- 🔐 **Password Change** for logged-in users  
- 🆕 **Add Interns** with dynamic referral codes  
- 🎁 **Achievements** based on donations raised  
- 🎨 Fully responsive and modern UI using Tailwind CSS

---

## ⚙️ Tech Stack

| Layer        | Tech                       |
|--------------|----------------------------|
| Frontend     | React + Tailwind CSS       |
| Routing      | React Router v6            |
| Auth Context | Custom Context API         |
| Backend      | Express.js (Node.js)       |
| Database     | MongoDB Atlas via Mongoose |
| Hosting FE   | Vercel                     |
| Hosting BE   | Render                     |

---

---

## 🧾 API Endpoints

| Method | Route                          | Description                          |
|--------|--------------------------------|--------------------------------------|
| GET    | `/api/intern/all`              | Get all interns                      |
| POST   | `/api/intern/add`              | Add a new intern                     |
| POST   | `/api/intern/login`            | Login using name and password        |
| GET    | `/api/intern/dashboard/:name`  | Get dashboard data for a specific intern |
| POST   | `/api/intern/change-password`  | Change password for a user           |

---


## 🛠️ Local Setup Instructions

### 1️⃣ Clone the repo

```bash
git clone https://github.com/BiswayanPaul/InternDashboard.git
cd InternDashboard
```
### 2️⃣ Setup Backend
```bash
cd backend 
npm install
```
### 🔐 Create .env file in backend root:
```bash
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/internDB
```
#### Then run the backend:
```bash
npm run dev
```
### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
---

## 🧪 Test the App Locally

- Open [http://localhost:5173](http://localhost:5173) for frontend
- Open [http://localhost:5000/api/intern/all](http://localhost:5000/api/intern/all) to test backend API

Make sure your frontend is calling the **local** backend during development.  
Update API URLs in Axios if needed:

```js
axios.get('http://localhost:5000/api/intern/all')
```

## 🔄 Fix Refresh Error on Deployment
If you're using React Router, refreshing a route like /login might give a 404.

### ✅ Fix for Vercel:
Create a file called vercel.json in the frontend/ folder:
```js
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

```
### ✅ Fix for Netlify:
Create a file named _redirects inside public/:

```bash
/*    /index.html   200
```

## 🎁 Reward System (auto-calculated)

```js
const calculateRewards = (amount) => {
  const rewards = [];
  if (amount >= 500) rewards.push("🎁 Bronze Badge");
  if (amount >= 1000) rewards.push("🥈 Silver Badge");
  if (amount >= 2000) rewards.push("🥇 Gold Badge");
  if (amount >= 3000) rewards.push("🏆 Platinum Badge");
  if (amount >= 4000) rewards.push("💎 Diamond Badge");
  if (amount >= 5000) rewards.push("👑 Legend Badge");
  return rewards;
};
```

## 📁 Folder Structure

```css
InternDashboard/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── hook/
    │   ├── App.jsx
    │   └── main.jsx
    └── public/
```

## 🙋 Author
Made with ❤️ by Biswayan Paul

## 📄 License
This project is for learning and demo purposes only. No commercial use intended.