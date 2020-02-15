const mongoose = require('mongoose');
require('../middleware/auth')

//Schema to map to a MongoDB collection defining a task within a collection
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
  },
  hyperlink: {
        type: String,
        required: false,
    },
    timestamps: true

})

const Task = mongoose.model("Task", taskSchema);


module.exports = Task;
