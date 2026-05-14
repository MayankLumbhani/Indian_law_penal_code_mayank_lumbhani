# ⚖️ Indian Penal & Legal API

A full-stack RESTful backend API for Indian Penal Code and Legal records.  
Built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

---

## 🧰 Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Runtime    | Node.js                  |
| Framework  | Express.js               |
| Database   | MongoDB + Mongoose       |
| Auth       | JWT (JSON Web Tokens)    |
| Security   | bcryptjs, CORS           |
| Dev Tool   | Nodemon, Postman         |

---

## 📁 Folder Structure

backend/
├── config/         → Database connection setup
├── controllers/    → Request & response logic
├── routes/         → API route definitions
├── models/         → Mongoose schemas
├── middlewares/    → Auth, logging, error handling
├── services/       → Business logic layer
├── utils/          → Reusable helper functions
├── server.js       → App entry point
└── .env.example    → Environment variable template

---

## ⚙️ Setup Instructions

1. Clone the repository
```bash
   git clone https://github.com/YOUR_USERNAME/repo-name.git
   cd repo-name
```

2. Install dependencies
```bash
   npm install
```

3. Create your environment file
```bash
   cp .env.example .env
```

4. Add your MongoDB URI and JWT secret inside `.env`

5. Start the development server
```bash
   npm run dev
```

---

## 🚀 Features

- ✅ Full CRUD for Legal Records
- ✅ Search by keyword (murder, fraud, cybercrime...)
- ✅ Filter by act, category, state, court
- ✅ Pagination & Sorting
- ✅ JWT Authentication (Register/Login)
- ✅ Protected & Admin Routes
- ✅ MongoDB Aggregation (Analytics & Stats)
- ✅ Global Error Handling
- ✅ MVC Architecture

---

## 📬 API Overview

| Category       | Base Route              |
|----------------|--------------------------|
| Laws CRUD      | `/api/v1/laws`           |
| Search         | `/api/v1/search/laws`    |
| Filter         | `/api/v1/laws/filter/`   |
| Analytics      | `/api/v1/analytics/laws` |
| Statistics     | `/api/v1/stats/laws`     |
| Auth           | `/api/v1/auth`           |
| Admin          | `/api/v1/admin`          |

---

## 👨‍💻 Developer

- **Name:** Mayank Lumbhani  
- **Project:** LexIndia  
