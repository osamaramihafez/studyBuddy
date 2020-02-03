const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth')
const User = require('../models/User')

// Create an account
router.post('/create/user', async (req, res, next) => ***REMOVED***  
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
})
// login to an existing account
router.post('/user/login', async (req, res) => ***REMOVED***
    try ***REMOVED***
        const user = await User.login(req.body.email, req.body.password);
        const tk = await user.genJWT();
        res.send(***REMOVED***user, tk})
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
    
})
// Logout from your account



module.exports = router