const { promisify } = require('util');
const db = require('./db');

const User = {
  save: promisify(db.users.save).bind(db.users),
  find: promisify(db.users.find).bind(db.users)
};

module.exports = User;