// Import Task model
const Task = require('../models/task.model');

// Service functions for task operations
// Create a new task
exports.createTask = async (data) => {
    return await Task.create(data);
};


// Get all tasks
exports.getAllTasks = async () => {
    return await Task.find();
};

// Get a task by ID
exports.getTaskById = async (id) => {
    return await Task.findById(id);
};