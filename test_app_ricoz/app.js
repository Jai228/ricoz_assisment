// Import express and create an app instance
const express = require('express');
const app = express();
// Import task routes and database configuration
const taskRoutes = require('./routes/task.routes');
require('./config/dbconfig');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use task routes for API endpoints
app.use('/api/tasks', taskRoutes);

module.exports = app;