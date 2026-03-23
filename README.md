# 📦 Node Task API

A simple REST API built using Express and MongoDB to manage tasks.

---

## 📁 Project Structure

project/
│
├── config/ # Database connection
├── models/ # Mongoose schemas (entities)
├── controllers/ # Request handling logic
├── services/ # Business logic layer
├── routes/ # API endpoints
│
├── app.js # App configuration
├── server.js # Entry point
└── .env # Environment variables


---

## 🔄 Application Flow

Client Request
↓
Route Layer
↓
Controller
↓
Service Layer
↓
Mongoose Model
↓
MongoDB
↓
Response


---

## 🚀 Features

- Create Task (POST)
- Get All Tasks (GET)
- Get Task by ID (GET)

---

## ⚙️ Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   node server.js

🧪 API Endpoints

Create Task
POST /api/tasks

Get All Tasks
GET /api/tasks

Get Task By ID
GET /api/tasks/:id
