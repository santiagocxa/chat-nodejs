const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const { socketConnect, socket } = require('./socket');
socketConnect(server);

socket.io.on('connection', (socket) => {
  console.log('OnSocket');
  socket.on('run', (data) => {
    console.log('messageBackEnd ', data);
    socket.emit('message', data.body);
  });
});

const bodyParser = require('body-parser');
const router = require('./network/routes');
const { config } = require('./config');
const connect = require('./db');

connect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);

app.use('/', express.static('public'));

server.listen(config.port, () => {
  console.log('run app port http://localhost:' + config.port);
});
