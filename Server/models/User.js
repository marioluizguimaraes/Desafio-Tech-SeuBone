const mongoose = require('mongoose')

const User = mongoose.model('User', {
    password: String
})

module.exports = User