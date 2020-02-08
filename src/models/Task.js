const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../middleware/auth')

const taskSchema = new mongoose.Schema({
  Title: {
    Type: String,
    required: true
    },
  Description:{
    Type: String,
    required: true,
  },
  Completed:{
    Type:Boolean,
    required: true
  }
})

const User = mongoose.model("User", userSchema);


module.exports = User