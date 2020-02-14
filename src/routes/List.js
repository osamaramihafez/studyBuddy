const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth')
const list = require('../models/User')

// Create an account
router.post('/list/create', auth, async (req, res, next) => ***REMOVED***  
    const title = req.body.title;
    const newList = new List(***REMOVED***
        title
    })
    newList.save()
    .then(() => res.json('List added!'))
    .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

// Gets the existing list given the ID
router.get('/list/get/:id', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        const gotList = await list.findById(req.params.id)
        res.status(200).send(***REMOVED***gotList***REMOVED***
    } catch (error) ***REMOVED***
        res.status(404).send("Error: list not found")
    }
***REMOVED***

// Deletes a list 
router.delete('/list/delete/:id', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        await list.findByIdAndDelete(req.params.id)
        res.status(200).send();
    } catch (error) ***REMOVED***
        res.status(404).send();
    }
})

// Updates the list title
router.update('/list/add/:id', auth, async(req, res) => ***REMOVED***
    try ***REMOVED***
        const gotList = await list.findByIdAndUpdate(req.params.id, ***REMOVED***title: req.body.title})
        res.send(200).send(***REMOVED***gotList})
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})
// Adds a task to the list
router.update('/list/add/:id', auth, async(req, res) => ***REMOVED***
    const task = req.body.task
    try ***REMOVED***
        const tasks = await list.addTask(task);
        res.status(200).send(***REMOVED***tasks})
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})



