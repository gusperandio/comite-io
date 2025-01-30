const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const { Server } = require('socket.io');

// Configure CORS
fastify.register(cors, { 
  origin: 'http://localhost:6500',
  methods: ['GET', 'POST']
});


// Create HTTP server through Fastify
const server = fastify.server;

// Set up Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:6500',
    methods: ['GET', 'POST'],
  },
});
 
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('message', (data) => {
    console.log('Message received:', data);
    io.emit('message', `Server received: ${data}`);
  });

  socket.on('approved', (data) => {
    io.emit('approved', `${data} Aprovou!`);
  });

  socket.on('refused', (data) => {
    console.log(data);
    io.emit('refused', `${data} Reprovou!`);
  });

  socket.on('noVote', (data) => {
    console.log(data);
    io.emit('noVote', `${data} Não votou!`);
  });

  socket.on('showModal', () => {
    console.log('Triggering modal for all users');
    io.emit('showModal');
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});