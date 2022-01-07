const Model = require('./model');

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function getChat(userId) {
  return new Promise((resolve, reject) => {
    let filterChat = {};
    if (userId) {
      filterChat = {
        users: userId,
      };
    }

    const chat = Model.find(filterChat)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return chat;
  });
}

module.exports = {
  addChat: addChat,
  getChat: getChat,
};
