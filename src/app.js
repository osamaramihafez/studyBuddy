const express = require('express');
const PORT = process.env.PORT || 3000;
const userRouter = require("./routes/user");
const taskRouter = require('./routes/Task');

require("./utils/DbSetup");

const app = express();

const taskRouter = require('./routes/task');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => console.log(`Listening on port $***REMOVED***PORT}`));