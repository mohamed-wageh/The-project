var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    token: String
  });

module.exports = mongoose.model('User', userSchema);