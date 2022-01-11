const store = require('./store');
const { socket } = require('../../socket');

function addMessage(chat, user, message) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      reject('Empty data');
      return false;
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Empty data');
      return false;
    }

    const result = await store.updateMessage(id, message);
    console.log(result);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido');
      return false;
    }
    store
      .deleteMessage(id)
      .then((data) => {
        if (data.deletedCount === 1) {
          resolve('Deleted Message');
        } else {
          resolve(data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
