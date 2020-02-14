const router = require('express').Router();
let task = require('../models/task');

//Create a task
router.route('/create/task').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
    const hyperlink = req.body.hyperlink
    const newTask = new task({
        title,
        description,
        completed,
        hyperlink
    })

    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Output all tasks
router.route('/').get((req, res) => {
    task.find()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Output a SPECIFIC task by its id
router.route('/:id').get((req, res) => {
    task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete a task by using a delete command and sending in the id
router.route('/:id').delete((req, res) => {
    task.findByIdAndDelete(req.params.id)
    .then(() => res.json('Task Deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update a task by sending in its id and using a post command
router.route('/update/:id').post((req, res) => {
    task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;

        task.save()
        .then(() => res.json('Task Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update a task by sending in its id and using a post command
router.route('/').post((req, res) => {
    task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;

        task.save()
        .then(() => res.json('Task Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//Gonna use this one to add a hyperlink
router.route('/update/:id').post((req, res) => {
    task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;
        tasl.hyperlink = req.body.hyperlink;
        task.save()
        .then(() => res.json('Task Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// //Gonna use this one to add an image
// router.route('/update/:id').post((req, res) => {
//     task.findById(req.params.id)
//     .then(task => {
//         task.title = req.body.title;
//         task.description = req.body.description;
//         task.completed = req.body.completed;

//         task.save()
//         .then(() => res.json('Task Updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router