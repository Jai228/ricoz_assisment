// Import task service  
const taskService = require('../services/task.services');

// Controller functions for task operations
exports.createTask = async (req, res) => {
    // Validate request body
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    // Validate request body
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
    // Validate request parameters
    try {
        const task = await taskService.getTaskById(req.params.id);
        if (!task) return res.status(404).json({ message: "Not found" });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};