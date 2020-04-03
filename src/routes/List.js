const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const List = require('../models/List');
const Task = require('../models/Task');

// Create a list
router.post('/list/create', auth, async (req, res) => ***REMOVED***
    const title = req.body.title;
    const newList = new List(***REMOVED***
        title,
        userid: req.user.id
    })//need to get list id from mongo and then add to the User db
    //changed code here
    listId = newList._id;
    // await user.update(***REMOVED***name: user}, $push: ***REMOVED***lists: listId***REMOVED***
    //end of change
    newList.save()
    .then(() => ***REMOVED***
        res.status(201).json(newList);
    }
    )
    .catch(err => ***REMOVED***
        console.log(err)
        res.status(400).json('Error: ' + err);
    })
***REMOVED***

// Gets all existing lists givern the user ID
router.get('/list/getAll/', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        const user = req.user
        let lists = [];
        // console.log(user._id)
        const listIds = await List.find(***REMOVED***userid: user._id***REMOVED***
        // console.log(listIds);
        for(let i = 0; i < listIds.length; i++) ***REMOVED***
            const tasks = await Task.find(***REMOVED*** listid: listIds[i]._id ***REMOVED***
            const obj = ***REMOVED***
                listId: listIds[i]._id,
                listTitle: listIds[i].title,
                tasks
            };
            lists.push(obj);
        }
        // console.log(lists);
        res.status(200).send(***REMOVED***lists***REMOVED***
    } catch (error) ***REMOVED***
        console.log(error);
        res.status(404).send("Error: list not found")
    }
***REMOVED***

// Deletes a list
router.delete('/list/delete/:id', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        await Task.deleteMany(***REMOVED***
            listid: req.params.id
        })
        await List.findByIdAndDelete(req.params.id);
        res.status(200).send();
    } catch (error) ***REMOVED***
        res.status(404).send();
    }
})


// Adds a task to the list
// Adds a list to the user's current lists (DO LATER)
// router/('/list/addlist/:id', auth, async(req, res) => ***REMOVED***
//     const list = req.body.list;
//     try ***REMOVED***
//         const tasks = await list.addTask(task);
//         res.status(200).send(***REMOVED***tasks})
//     } catch (error) ***REMOVED***
//         res.status(400).send();
//     }
// })


module.exports = router;