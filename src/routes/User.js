const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth')
const User = require('../models/User')
var nodemailer = require('nodemailer');
const list = require('../models/List');
const task = require('../models/Task');

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
***REMOVED***
// Send email to the new user
router.post('/send', async (req, res, next) => ***REMOVED***
    var transporter = nodemailer.createTransport(***REMOVED***
        service: 'gmail',
        auth: ***REMOVED***
          user: 'studdybuddycsc301@gmail.com',
          pass: 'Studdy123'
        }
      ***REMOVED***

    var mailOptions = ***REMOVED***
        from: 'studdybuddycsc301@gmail.com',
        to: req.body.email,
        subject: 'Welcome to StuddyBuddy!',
        text: `Hi `+req.body.name+`, thank you for registering with Studdy Buddy! This is a confirmation email
        to ensure you have registered with us. Welcome :)`
    };

    transporter.sendMail(mailOptions, function(error, info)***REMOVED***
        if (error) ***REMOVED***
            console.log(error);
        } else ***REMOVED***
            console.log('Email sent: ' + info.response);
        }
    ***REMOVED***
***REMOVED***
// login to an existing account
router.post('/user/login', async (req, res) => ***REMOVED***
    try ***REMOVED***
        const user = await User.login(req.body.email, req.body.password);
        const tk = await user.genJWT();
        res.send(***REMOVED*** user, tk })
    } catch (error) ***REMOVED***
        console.log(error);
        res.status(400).send();
    }

***REMOVED***
router.get('/:id', async (req, res) => ***REMOVED*** //might need to make multiple requests still needs to be worked on
    const user =  await User.findOne(req.params.id)
    const userLists = await list.find(***REMOVED***userid: ***REMOVED*** user: userid } }).toArray()
    const taskLists = await userLists.foreach()

    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

router.post('/update/:id', auth, (req, res) => ***REMOVED***
    User.findById(req.params.id)
        .then(user => ***REMOVED***
            user.name = req.body.name;
            user.email = req.body.email;
            user.tokens = req.body.tokens;
            user.save()
                .then(() => res.json('User Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
***REMOVED***

router.post('/user/logout', auth, async (req, res) => ***REMOVED***
    try ***REMOVED***
        req.user.tokens = [];
        await req.user.save();
        res.status(200).send()
    } catch (error) ***REMOVED***
        console.log(error);
        res.status(500).send();

    }
})




module.exports = router
