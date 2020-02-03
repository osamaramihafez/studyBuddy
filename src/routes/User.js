const express = require("express");
const router = new express.Router();
const User = require("../models/user");

// Create an account
router.post('/user/create', async (req, res) => ***REMOVED***
    console.log(req.body)
    const user = new User(req.body)
    try ***REMOVED***
        user.save();
        res.status(201).send();
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})
// login to an existing account
router.post('/user/login', async (req, res) => ***REMOVED***
    try ***REMOVED***
        User.login(req.body.email, req.body.password)
    } catch (error) ***REMOVED***
        res.status(400).send();
    }
})
// Logout from your account



module.exports = router