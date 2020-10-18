const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth')
const list = require('../models/User')

// Create an account
router.post('/list/create', auth, async (req, res, next) => {  
    const title = req.body.title;
    const newList = new List({
        title
    })
    newList.save()
    .then(() => res.json('List added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Gets the existing list given the ID
router.get('/list/get/:id', auth, async (req, res) => {
    try {
        const gotList = await list.findById(req.params.id)
        res.status(200).send({gotList});
    } catch (error) {
        res.status(404).send("Error: list not found")
    }
});

// Deletes a list 
router.delete('/list/delete/:id', auth, async (req, res) => {
    try {
        await list.findByIdAndDelete(req.params.id)
        res.status(200).send();
    } catch (error) {
        res.status(404).send();
    }
})

// Updates the list title
router.update('/list/add/:id', auth, async(req, res) => {
    try {
        const gotList = await list.findByIdAndUpdate(req.params.id, {title: req.body.title})
        res.send(200).send({gotList})
    } catch (error) {
        res.status(400).send();
    }
})
// Adds a task to the list
router.update('/list/add/:id', auth, async(req, res) => {
    const task = req.body.task
    try {
        const tasks = await list.addTask(task);
        res.status(200).send({tasks})
    } catch (error) {
        res.status(400).send();
    }
})



