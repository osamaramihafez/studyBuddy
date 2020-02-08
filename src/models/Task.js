const mongoose = require('mongoose');
require('../middleware/auth')

const taskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
    },
  Description:{
    Type: String,
    required: true,
    trim:true
  },
  Completed:{
    type:Boolean,
    required: true
  }
})

const Task = mongoose.model("Task", taskSchema);


module.exports = Task;