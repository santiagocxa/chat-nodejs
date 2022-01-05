const store = require('./store');

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject('Nombre Invalido');
    }
    const user = {
      name,
    };
    store.addUser(user);
    resolve(user);
  });
}

function getUsers() {
  return store.getUser();
}

module.exports = {
  addUser,
  getUsers,
};
