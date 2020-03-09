const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth')
const User = require('../models/User')

// Create an account
router.post('/create/user', async (req, res, next) => {
    const user = new User(req.body);
    console.log(user);
    try {
        const tk = await user.genJWT();
        await user.save();
        res.status(201).send({
            user,
            tk
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});
// login to an existing account
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.login(req.body.email, req.body.password);
        const tk = await user.genJWT();
        res.send({ user, tk })
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }

});

module.exports = router