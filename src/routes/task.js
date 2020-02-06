const router = require('express').Router();
let task = require('../models/task');

//Create a task
router.route('/create/task').post((req, res) => ***REMOVED***
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const newTask = new task(***REMOVED***
        title,
        description,
        completed
    })

    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Output all tasks
router.route('/').get((req, res) => ***REMOVED***
    task.find()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Output a SPECIFIC task by its id
router.route('/:id').get((req, res) => ***REMOVED***
    task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Delete a task by using a delete command and sending in the id
router.route('/:id').delete((req, res) => ***REMOVED***
    task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Update a task by sending in its id and using a post command
router.route('/update/:id').post((req, res) => ***REMOVED***
    task.findById(req.params.id)
    .then(task => ***REMOVED***
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;

        task.save()
        .then(() => res.json('Task Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

module.exports = router