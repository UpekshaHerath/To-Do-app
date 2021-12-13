const express = require('express')
const mongoose = require('mongoose')
const URL = "mongodb://localhost/todoList"

const app = express();

mongoose.connect(URL, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected with db')
})

app.use(express.json())

const todoItemRouter = require('./routers/todoList')
app.use('/todo', todoItemRouter)

app.listen(5000, () => {
    console.log('server started...')
})