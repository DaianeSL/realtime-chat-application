const fs = require('fs');
const images = fs.readdirSync('./images/cats').filter((file) => file.match(/\.(png|jpe?g)$/i));

const users = [];

const addUser = ({ id, name, room }) => {
  name = name;
  slug = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.slug === slug);

  if (existingUser) {
    return { error: 'username is already taken' };
  }

  const user = {
    id,
    name,
    slug,
    room,
    image: '/cats/' + images[Math.floor(Math.random() * images.length)],
  };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
