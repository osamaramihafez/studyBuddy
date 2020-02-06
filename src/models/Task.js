***REMOVED***
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../middleware/auth')

const taskSchema = new mongoose.Schema(***REMOVED***
    name: ***REMOVED***
        Title: String,
        Description: String,
        Completed: Boolean
    }
    // timestamps: true
})

userSchema.methods.genJWT = async function () ***REMOVED***
    const user = this;
    const token = jwt.sign(***REMOVED***
      _id: user._id.toString()
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
userSchema.statics.validatePass = async (pw) => ***REMOVED***
    const user = this;
    const isValid = await bcrypt.compare(pw, user.password)
    return isValid;
}

userSchema.statics.login = async (email, password) => ***REMOVED***
    const user = await this.findOne(***REMOVED***email***REMOVED***
    if(!user) throw new Error("Unable to login");
    const isValid = await user.validatePass(password);
    if(!isValid) throw new Error("Unable to login");
    else return user;
}
const User = mongoose.model("User", userSchema);


module.exports = User