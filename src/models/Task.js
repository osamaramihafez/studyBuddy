***REMOVED***
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../middleware/auth')

const taskSchema = new mongoose.Schema(***REMOVED***
  Title: ***REMOVED***
    Type: String,
    required: true
    },
  Description:***REMOVED***
    Type: String,
    required: true,
  },
  Completed:***REMOVED***
    Type:Boolean,
    required: true
  }
})

const User = mongoose.model("User", userSchema);


module.exports = User