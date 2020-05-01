const express = require('express');
const server = express();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8000;

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');
const router = require('./router');

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }

    socket.emit('msg', {
      user: 'admin',
      text: `Wellcome, ${user.name}!`,
      image: 'admin.jpg',
    });

    socket.broadcast.to(user.room).emit('msg', {
      user: 'admin',
      text: `${user.name}, has joined!`,
      image: 'admin.jpg',
    });

    socket.join(user.room);

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on('sendMsg', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('msg', {
      user: user.name,
      slug: slug,
      text: message,
      image: user.image,
    });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('msg', {
        user: 'admin',
        text: `${user.name} has left.`,
        image: 'admin.jpg',
      });

      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

server.use(cors());
server.use(express.static(__dirname + '/images'));
server.use(router);

http.listen(PORT, () => console.log(`Listening on port ${PORT}`));
