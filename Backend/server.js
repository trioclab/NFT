const express = require('express');
const http = require('http');
const cors = require('cors');
const socketio = require('socket.io');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const nftRoutes = require('./routes/nftRoutes');
const handleBid = require('./sockets/bidSockets');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/nfts', nftRoutes);

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Client connected');
  handleBid(io, socket);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
