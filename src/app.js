const express = require('express');
const PORT = process.env.PORT || 3000;
const userRouter = require("./routes/user");

require("./utils/DbSetup");

const app = express();
app.use(express.json())
app.use(userRouter);

app.listen(PORT, () => console.log(`Listening on port $***REMOVED***PORT}`));