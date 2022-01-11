const Model = require('./model');

function addMessages(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { chat: filterChat };
    }
    const messages = Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
    return messages;
  });
}

async function updateMessage(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function deleteMessage(id) {
  let foundMessage = await Model.findById(id);
  let message = await foundMessage;

  if (!message) {
    return 'The message does not exist or has already been deleted';
  }
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessages,
  list: getMessages,
  updateMessage: updateMessage,
  deleteMessage: deleteMessage,
};
