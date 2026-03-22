// Import app
const app = require('./app');

// Start the server
const PORT = 3000;

// Listen on the specified port and log a message when the server is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});