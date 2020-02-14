***REMOVED***

const taskSchema = new mongoose.Schema(***REMOVED***
    title: ***REMOVED***
        type: String,
        required: true,
        trim: true
    },
    description: ***REMOVED***
        type: String,
        required: true
    },
    completed: ***REMOVED***
        type: Boolean,
        required: true
    },
    hyperlink: ***REMOVED***
        type: String,
        required: false,
    },
    timestamps: true
})

const User = mongoose.model("Tasks", taskSchema);


module.exports = User