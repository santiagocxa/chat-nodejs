const socketIO = require('socket.io');
const socket = {};

function socketConnect(server) {
  socket.io = socketIO(server, {
    transports: ['websocket', 'polling'],
  });
}

module.exports = {
  socketConnect,
  socket,
};
