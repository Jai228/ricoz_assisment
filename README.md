project/
│
├── config/        → DB connection
├── models/        → schema (entity)
├── controllers/   → request handling
├── services/      → business logic
├── routes/        → API endpoints
│
├── app.js         → app configuration
├── server.js      → entry point
└── .env           → environment variables
------------------------------------------------------------------------------------------------
Flow of the project

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
