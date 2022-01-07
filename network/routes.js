const express = require('express');

const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = function (server) {
  server.use('/user', user);
  server.use('/chat', chat);
};

module.exports = routes;
