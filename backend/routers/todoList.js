const express = require('express')
const router = express.Router()
const TodoItem = require('../models/todoModel')

router.get('/', async (req, res) => {
    console.log('This is the get request...')
    try {
        const todoItems = await TodoItem.find()
        res.json(todoItems)
    } catch (err) {
        res.send('Error : ' + err)
    }
})

router.post('/', async (req, res) => {
    const newToDoItem = new TodoItem({
        message: req.body.message
    })

    try {
        const todo1 = await newToDoItem.save()
        res.json(todo1)
    } catch(err) {
        res.send("Error" + err)
    }
})

module.exports = router