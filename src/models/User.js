const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../middleware/auth')

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

userSchema.methods.genJWT = async function () {
    const user = this;
    const token = jwt.sign({
      _id: user._id.toString()
    }, process.env.JWTS);
    user.tokens = user.tokens.concat({
      token
    });
    await user.save();
    return token;
  };

// Encypts the password before its pushed to the DB.
// Saving passwords in plain text is never a good idea
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });
userSchema.statics.validatePass = async (pw) => {
    const user = this;
    const isValid = await bcrypt.compare(pw, user.password)
    return isValid;
}

userSchema.statics.login = async (email, password) => {
    const user = await this.findOne({email});
    if(!user) throw new Error("Unable to login");
    const isValid = await user.validatePass(password);
    if(!isValid) throw new Error("Unable to login");
    else return user;
}
const User = mongoose.model("User", userSchema);


module.exports = User