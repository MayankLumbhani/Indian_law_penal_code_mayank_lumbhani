# LexIndia

## A Full Stack Legal Information Management & Analytics Platform

LexIndia is a scalable full-stack legal-tech platform built using the MERN stack that centralizes Indian legal acts into a searchable, filterable, analytics-driven API and dashboard system.

The platform provides secure authentication, advanced legal search, analytics dashboards, filtering systems, pagination, sorting, admin controls, and RESTful APIs for Indian legal datasets.

---

# Project Objective

The objective of LexIndia is to solve the problem of scattered and difficult-to-search Indian legal data by creating a centralized legal information platform.

The platform allows:

* Searching legal sections
* Filtering acts and categories
* Pagination and sorting
* Analytics on legal datasets
* Secure JWT authentication
* Admin dashboard management
* Scalable REST APIs

---

# Problem Statement

Indian legal acts such as IPC, CRPC, CPC, HMA, Evidence Act, Motor Vehicles Act, and others are difficult to search, manage, and analyze in a centralized manner.

LexIndia solves this problem by:

* Combining multiple legal datasets into a unified structure
* Providing searchable and filterable APIs
* Offering analytics and aggregation-based insights
* Building a secure admin and user dashboard system

---

# Features

## Backend Features

* RESTful API architecture
* MongoDB database integration
* JWT authentication system
* Role-based access control (Admin/User)
* Search APIs
* Pagination
* Filtering
* Sorting
* Aggregation pipelines
* Middleware system
* Global error handling
* Rate limiting
* Request validation
* Logging middleware
* Secure password hashing
* Scalable MVC architecture

---

## Frontend Features

* Admin dashboard
* User dashboard
* Responsive UI
* Authentication system
* CRUD operations
* Analytics charts
* Search interface
* Filters and sorting UI
* Pagination system
* Theme support
* Redux Toolkit state management

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors
* helmet
* morgan
* express-rate-limit

---

## Frontend

* React.js
* Vite
* Tailwind CSS
* Material UI (MUI)
* Redux Toolkit
* Axios
* React Router
* Formik
* Yup

---

# Dataset Sources

The platform integrates multiple Indian legal datasets:

* Indian Penal Code (IPC)
* Code of Criminal Procedure (CRPC)
* Civil Procedure Code (CPC)
* Hindu Marriage Act (HMA)
* Indian Divorce Act (IDA)
* Indian Evidence Act (IEA)
* Negotiable Instruments Act (NIA)
* Motor Vehicles Act (MVA)

---

# Dataset Normalization

The original datasets contained inconsistent structures.

Example issues:

* Different field names
* Missing standardized schema
* CSV-style malformed JSON in HMA dataset

A normalization pipeline was created to:

* Clean raw datasets
* Normalize field names
* Merge all legal acts into a unified structure
* Generate MongoDB-ready JSON

Final normalized structure:

```js
{
  act,
  chapter,
  chapter_title,
  section,
  section_title,
  description
}
```

---

# Project Architecture

LexIndia follows industry-standard MVC architecture.

```bash
backend/
│
├── raw-data/
├── seed/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── validations/
│   ├── utils/
│   └── app.js
│
├── server.js
├── package.json
└── .env
```

---

# MongoDB Schema Design

## Law Schema

```js
{
  act: String,
  chapter: Number,
  chapter_title: String,
  section: Number,
  section_title: String,
  description: String,
  views: Number,
  bookmarks: Number,
  isArchived: Boolean,
  isRepealed: Boolean
}
```

---

## User Schema

```js
{
  name: String,
  email: String,
  password: String,
  role: String
}
```

---

# Core API Modules

## Laws APIs

* CRUD operations
* Search APIs
* Filtering APIs
* Pagination APIs
* Sorting APIs
* Aggregation APIs

---

## Authentication APIs

* Register
* Login
* Logout
* JWT token generation
* Token verification
* Protected routes

---

## Admin APIs

* User management
* Reports management
* Analytics monitoring
* Security event monitoring

---

# Backend Concepts Implemented

* MVC architecture
* Middleware chaining
* MongoDB indexing
* Aggregation pipelines
* REST API design
* Authentication & authorization
* Error handling
* Request validation
* Query optimization
* Scalable folder structure

---

# Frontend Concepts Implemented

* Protected routes
* Redux Toolkit state management
* API integration using Axios
* Responsive dashboard design
* Dynamic forms
* Charts & analytics
* Theme management
* Reusable UI components

---

# API Features

## Search System

Example:

```bash
GET /api/v1/search/laws?q=murder
```

---

## Filtering

```bash
GET /api/v1/laws?act=IPC
```

```bash
GET /api/v1/laws?category=CyberCrime
```

---

## Pagination

```bash
GET /api/v1/laws?page=1&limit=10
```

---

## Sorting

```bash
GET /api/v1/laws?sort=section
```

---

# Security Features

* JWT authentication
* Password hashing using bcryptjs
* Rate limiting
* Helmet security middleware
* Protected admin routes
* Validation middleware
* Error handling middleware

---

# Aggregation & Analytics

The platform uses MongoDB aggregation pipelines for:

* Most viewed laws
* Most bookmarked laws
* Laws by category
* Laws by act
* User activity analytics
* Search trends
* Popular sections

---

# Performance Optimization

* MongoDB indexing
* Query optimization
* Pagination
* Projection
* Lazy loading (frontend)
* Optimized rendering

---

# Installation Guide

## Clone Repository

```bash
git clone <repository-url>
```

---

# Backend Setup

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Run Backend

```bash
npm run dev
```

---

# Frontend Setup

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

---

# Database Seeding

## Normalize Dataset

```bash
node seed/normalizeDataset.js
```

---

## Seed MongoDB

```bash
node seed/seedDatabase.js
```

---

# Future Improvements

* AI-powered legal recommendations
* NLP-based legal search
* Voice search
* PDF legal document uploads
* Bookmark synchronization
* Real-time notifications
* Advanced analytics dashboards
* Multi-language support

---

# Learning Outcomes

This project demonstrates:

* Full stack development
* Backend architecture design
* MongoDB schema modeling
* API engineering
* Authentication systems
* Dashboard development
* Scalable project structuring
* Data normalization
* Aggregation pipelines
* Industry-standard development workflow

---

# Conclusion

LexIndia is a modern legal-tech platform that demonstrates scalable full-stack architecture using MERN technologies while solving the real-world problem of centralized legal information access and analytics.

The project combines backend engineering, frontend dashboard systems, database design, authentication, analytics, and API development into a single production-style application.
