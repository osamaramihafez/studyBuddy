***REMOVED***
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../middleware/auth')

const userSchema = new mongoose.Schema(***REMOVED***
  name: ***REMOVED***
    type: String,
    required: true,
    trim: true
  },
  email: ***REMOVED***
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  password: ***REMOVED***
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [***REMOVED***
    token: ***REMOVED***
      type: String,
      required: true
    }
  }]
  // timestamps: true
})

userSchema.methods.genJWT = async function () ***REMOVED***
  const user = this;
  const token = jwt.sign(***REMOVED***
    _id: user._id.toString(),
    expiresIn: '7d'
  }, process.env.JWTS);
  user.tokens = user.tokens.concat(***REMOVED***
    token
  ***REMOVED***
  await user.save();
  return token;
};

// Encypts the password before its pushed to the DB.
// Saving passwords in plain text is never a good idea
userSchema.pre("save", async function (next) ***REMOVED***
  const user = this;
  if (user.isModified("password")) ***REMOVED***
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
***REMOVED***

userSchema.statics.login = async (email, password) => ***REMOVED***
  const user = await User.findOne(***REMOVED*** email ***REMOVED***
  console.log(user);
  if (!user) throw new Error("Unable to login");
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) throw new Error("Unable to login");
  else return user;
}

userSchema.virtual('userId').get(function() ***REMOVED***
  return this._id;
***REMOVED***

const User = mongoose.model("User", userSchema);


module.exports = User
