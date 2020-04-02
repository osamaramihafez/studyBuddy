const jwt = require('jsonwebtoken');
const User = require('../models/User');
***REMOVED***

const auth = async (req, res, next) => ***REMOVED***
    try ***REMOVED***
        console.log(req)
        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token);
        const dec = jwt.verify(token, process.env.JWTS);
        const user = await User.findOne(***REMOVED***
            _id: dec._id,
            'tokens.token': token
        })
        if(!user) throw new Error();
        req.token = token;
        req.user = user;
    } catch (error) ***REMOVED***
        console.log(error)
        res.status(401).send(***REMOVED***message: "Please authenticate beforehand"})
    }
    next();
}

module.exports = auth;