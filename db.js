const db = require('mongoose');
const { config } = require('./config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

db.Promise = global.Promise;

async function connect() {
  await db.connect(
    `mongodb+srv://${USER}:${PASSWORD}@cluster0.wsdjt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

  console.log('conexion BD exitosa!');
}

module.exports = connect;
