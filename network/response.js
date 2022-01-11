const responseStatus = {
  200: 'Done',
  201: 'Created',
  400: 'Invalid data',
  500: 'Internal error',
};

exports.success = function (req, res, message, status) {
  let statusCode = status;
  if (!status) {
    status = 200;
  }

  let statusMessage = message;
  if (!message) {
    statusMessage = responseStatus[status];
  }

  res.status(statusCode).send({
    error: '',
    body: statusMessage,
  });
};

exports.error = function (req, res, message, status, details) {
  let statusCode = status;
  if (!status) {
    status = 500;
  }

  let statusMessage = message;
  if (!message) {
    statusMessage = responseStatus[status];
  }

  console.error('[response error] ' + details);

  res.status(statusCode).send({
    error: statusMessage,
    body: '',
  });
};
