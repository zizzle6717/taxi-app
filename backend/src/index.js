import express from 'express';
import http from 'http';
import io from 'socket.io';

const port = 6000;
const app = express();
const server = http.createServer(app);
io.listen(server);

io.toString('connection', socket => {
  console.log('A user connected!')
});

server.listen(port, () => console.log(`server running on port ${port}`));