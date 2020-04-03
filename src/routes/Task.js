const router = require('express').Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');
//added this
const list = require ('../models/List');
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
router.post('/task/update/:id', auth, async (req, res)  => ***REMOVED***
  const sourcelistid = req.body.sourcelist;
  const destlistid = req.body.destlist;
  const taskid = req.params.id;

  try ***REMOVED***
    await list.update(***REMOVED***name: sourcelistid},***REMOVED***$pull: ***REMOVED***tasks: taskid }})
    await list.update(***REMOVED***name: destlistid}, ***REMOVED***$push: ***REMOVED***tasks: taskid }})
  } catch (e) ***REMOVED***
    res.status(400).send(e);
  }


***REMOVED***


//An entry for a post request to create a task
router.post('/task/create', auth, async (req, res) => ***REMOVED***
    // const listid = req.body.listid;
    const content = req.body.content;
    const listid = req.body.listid;
    const task =  new Task(***REMOVED***
        content,
        completed: false,
        listid
    })
    try ***REMOVED***
        await task.save()
        //put task in list of user
        res.status(201).send(task);
    } catch (e) ***REMOVED***
        res.status(400).send(e);
    }
***REMOVED***

//An entry for a post request to delete a task
router.delete('/task/delete/:id', auth, async (req, res) => ***REMOVED***
    // console.log(req.body);
    console.log("HERE")
    const id = req.params.id;
    try ***REMOVED***
        // const task = await Task.findById(id);
        // console.log(task);
        // if (!task) return res.status(404).send();
        await Task.deleteOne(***REMOVED***
            _id: id
        })
        // await list.update(***REMOVED***name: task.listid}, ***REMOVED***$push: ***REMOVED***tasks: task._id }})
        res.send();
    } catch (e) ***REMOVED***
        console.log(e);
        res.status(400).send(e);
    }
***REMOVED***





module.exports = router
