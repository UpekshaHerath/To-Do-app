const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    message : {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('TodoIdem', todoSchema)

