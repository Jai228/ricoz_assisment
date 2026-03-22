//
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
// Log connection success or error
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));