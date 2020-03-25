const express = require('express');
const PORT = process.env.PORT || 8000;
const userRouter = require("./routes/User");
const taskRouter = require('./routes/Task');
require("./utils/DbSetup");

const app = express();

app.use(function (req, res, next) ***REMOVED***
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, Delete');
    next();
***REMOVED***

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => console.log(`Listening on port $***REMOVED***PORT}`));
