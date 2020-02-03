const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[{
        token: {
            type: String,
            required: true
        }
    }],
    // timestamps: true
})

passport.use(new LocalStrategy( (email, password, done) => {
       User.findOne(email, (err, user) => {
         if (err) return done(err)
         // User not found
         if (!user) return done(null, false)
         // Always use hashed passwords and fixed time comparison
         bcrypt.compare(password, user.passwordHash, (err, isValid) => {
           if (err) return done(err)
           if (!isValid) return done(null, false)
           return done(null, user)
         })
       })
    }))
// Encypts the password before its pushed to the DB.
// Saving passwords in plain text is never a good idea
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 5);
    }
    next();
  });
const User = mongoose.model("User", userSchema);


module.exports = User