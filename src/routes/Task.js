const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Task = require('../models/task');

//An entry for a post request to create a task
router.post('/create/task', auth, async (req, res, next) => {  
    const task = new Task({
        ...req.body,
    })
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});
//An entry for a post request to delete a task
router.post('/delete/task', auth, async (req, res, next) => {  
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id)
        if (!task) return res.status(404).send();
        await Task.deleteOne({
            _id
        })
        res.send();
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
