// routes/task.routes.js
const express = require('express');
const router = express.Router();

// Import task controller
const taskController = require('../controllers/task.controller');

// Define routes for task operations
// Create a new task
router.post('/', taskController.createTask);
// Get all tasks
router.get('/', taskController.getAllTasks);
// Get a task by ID
router.get('/:id', taskController.getTaskById);

module.exports = router;