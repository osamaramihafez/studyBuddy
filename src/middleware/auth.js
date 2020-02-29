const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Task = require('../models/Task');
const List = require('../models/List');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const dec = jwt.verify(token, process.env.JWTS);
        const user = await User.findOne({
            _id: dec._id,
            'tokens.token': token
        })
        if(!user) throw new Error();
        req.token = token;
        req.user = user;
    } catch (error) {
        res.status(401).send({message: "Please authenticate beforehand"})
    }
}

module.exports = auth;