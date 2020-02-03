***REMOVED***
const bcrypt = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

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
    },
    password: ***REMOVED***
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[***REMOVED***
        token: ***REMOVED***
            type: String,
            required: true
        }
    }],
    // timestamps: true
})

passport.use(new LocalStrategy( (email, password, done) => ***REMOVED***
       User.findOne(email, (err, user) => ***REMOVED***
         if (err) return done(err)
         // User not found
         if (!user) return done(null, false)
         // Always use hashed passwords and fixed time comparison
         bcrypt.compare(password, user.passwordHash, (err, isValid) => ***REMOVED***
           if (err) return done(err)
           if (!isValid) return done(null, false)
           return done(null, user)
         })
       })
    }))
// Encypts the password before its pushed to the DB.
// Saving passwords in plain text is never a good idea
userSchema.pre("save", async function (next) ***REMOVED***
    const user = this;
    if (user.isModified("password")) ***REMOVED***
      user.password = await bcrypt.hash(user.password, 5);
    }
    next();
  ***REMOVED***
const User = mongoose.model("User", userSchema);


module.exports = User