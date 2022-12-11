const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    token: String
});

module.exports = mongoose.model.Users || mongoose.model('User', UserSchema);
