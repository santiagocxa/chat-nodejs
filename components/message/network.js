const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  const filterMessage = req.query.chat || null;
  controller
    .getMessages(filterMessage)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.post('/', function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((message) => {
      response.success(req, res, message, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Internal error', 400, e);
    });
});

router.patch('/:id', function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

router.delete('/:id', function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then((data) => {
      response.success(req, res, data || 'Deleted Message', 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
