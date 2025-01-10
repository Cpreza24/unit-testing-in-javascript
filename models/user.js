const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: String
});

module.exports = mongoose.model('User', userSchema);