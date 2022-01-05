const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const router = require('./network/routes');
const { config } = require('./config');
const connect = require('./db');
const socket = require('./socket');

connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
socket.connect(server);
router(app);

app.use('/', express.static('public'));

server.listen(config.port);
console.log('run app port http://localhost:' + config.port);
