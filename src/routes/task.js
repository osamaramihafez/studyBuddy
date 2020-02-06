const router = require('express').Router();
let task = require('../models/task');

router.route('/create/task').post((req, res) => ***REMOVED***
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed;
})

// Create an account
router.post('/create/task', async (req, res, next) => ***REMOVED***  
    const user = new User(req.body);
    console.log(user);
    try ***REMOVED***
        const tk = await user.genJWT();
        await user.save();
        res.status(201).send(***REMOVED***
            user,
            tk
        ***REMOVED***
    } catch (error) ***REMOVED***
        console.log(error);
        res.status(400).send(error);
    }  
***REMOVED***

module.exports = router