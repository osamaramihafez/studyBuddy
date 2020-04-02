const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth');
const user = require('../models/User');
const list = require('../models/List');

// Create a list
router.post('/list/create', auth, async (req, res, next) => ***REMOVED***
    const title = req.body.title;

    const user = req.body.user;
    const newList = new List(***REMOVED***
        title,
        user
    })//need to get list id from mongo and then add to the User db
    //changed code here
    listId = newList._id;
    await user.update(***REMOVED***name: user}, $push: ***REMOVED***lists: listId***REMOVED***
    //end of change
    newList.save()
    .then(() => res.json('List created!'))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

// Gets the existing list given the ID
router.get('/list/get/:id', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        const gotList = await user.findById(req.params.id)
        res.status(200).send(***REMOVED***gotList***REMOVED***
    } catch (error) ***REMOVED***
        res.status(404).send("Error: list not found")
    }
***REMOVED***

// Deletes a list
router.delete('/list/delete/:id', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        ///changed code here
        const user = req.params.user;
        await list.update(***REMOVED***name: user}, $pull: ***REMOVED***lists: listId ***REMOVED***
        //end of change
        await list.findByIdAndDelete(req.params.id);
        res.status(200).send();
    } catch (error) ***REMOVED***
        res.status(404).send();
    }
})


// Adds a task to the list
router.update('/list/addtask/:id', auth, async(req, res) => ***REMOVED***
    const task = req.body.task;
    try ***REMOVED***
        const tasks = await list.addTask(task);
        res.status(200).send(***REMOVED***tasks})
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})

// Adds a list to the user's current lists (DO LATER)
router.update('/list/addlist/:id', auth, async(req, res) => ***REMOVED***
    const list = req.body.list;
    try ***REMOVED***
        const tasks = await list.addTask(task);
        res.status(200).send(***REMOVED***tasks})
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})
