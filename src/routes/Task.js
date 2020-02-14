const router = require('express').Router();
const Task = require('../models/task');
const auth = require('../middleware/auth')

//Output all tasks
router.get('/', auth, (req, res) => ***REMOVED***
    Task.find()
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Output a SPECIFIC task by its id
router.get('task/get/:id', auth, (req, res) => ***REMOVED***
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

//Update a task by sending in its id and using a post command
router.post('/task/update/:id', auth, (req, res) => ***REMOVED***
    Task.findById(req.params.id)
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


//An entry for a post request to create a task
router.post('/create/task', auth, async (req, res, next) => ***REMOVED***
    const task = new Task(***REMOVED***
        ...req.body,
    })
    try ***REMOVED***
        await task.save();
        res.status(201).send(task);
    } catch (e) ***REMOVED***
        res.status(400).send(e);
    }
***REMOVED***
//An entry for a post request to delete a task
router.delete('/delete/task/:_id', auth, async (req, res, next) => ***REMOVED***
    const _id = req.params.id;
    try ***REMOVED***
        const task = await Task.findById(_id)
        if (!task) return res.status(404).send();
        await Task.deleteOne(***REMOVED***
            _id
        })
        res.send();
    } catch (e) ***REMOVED***
        res.status(500).send(e);
    }
***REMOVED***

module.exports = router