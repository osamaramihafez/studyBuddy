const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth')
const Task = require('../models/task');

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
router.post('/delete/task', auth, async (req, res, next) => ***REMOVED***  
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

module.exports = router;
