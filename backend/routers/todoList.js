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
        res.send("Error " + err)
    }
})

router.delete('/', async (req, res) => {
    const id = req.body.id
    try {
        TodoItem.findByIdAndDelete(id, () => {
            res.send("The message of " + id + "was deleted")
        })

    } catch (err) {
        res.send("Error " + err)
    }
})
module.exports = router