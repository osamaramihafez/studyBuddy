const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    hyperlink: {
        type: String,
        required: false,
    },
    timestamps: true
})

const User = mongoose.model("Tasks", taskSchema);


module.exports = User