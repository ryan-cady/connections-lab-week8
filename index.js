const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up a port for the server to listen on
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

// Handle socket connection
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    // Listen for 'bkg' messages from this client
    socket.on('bkg', (data) => {
        console.log("Received 'bkg' event with data:", data);

        // Emit the 'bkg' event to all connected clients
        io.emit('bkg', data);
    });

    // Handle socket disconnection
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});
