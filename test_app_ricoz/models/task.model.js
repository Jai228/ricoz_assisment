// Import mongoose
const mongoose = require('mongoose');

// Define Task schema   
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,

    // Add a status field with default value 'pending'  
    status: {
        type: String,
        default: 'pending'
    }
},
// Add timestamps for createdAt and updatedAt
 { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);