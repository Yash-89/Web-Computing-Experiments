// app.js
import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML page)
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request to show the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Handle POST request when form is submitted
app.post('/submit', (req, res) => {
    const name = req.body.username;
    res.send(`Hello, ${name}! You sent a POST request.`);
});

// Additional routes to demonstrate other HTTP methods (optional)
// app.put('/put-example', (req, res) => {
//     res.send("PUT Request Received");
// });

// app.delete('/delete-example', (req, res) => {
//     res.send("DELETE Request Received");
// });

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
