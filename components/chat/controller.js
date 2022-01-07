const store = require('./store');

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      reject('Invalid user list');
    }
    const chat = {
      users,
    };
    store.addChat(chat);
    resolve(chat);
  });
}

function getChat(userId) {
  return store.getChat(userId);
}

module.exports = {
  addChat,
  getChat,
};
