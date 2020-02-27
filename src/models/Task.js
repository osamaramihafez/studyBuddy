***REMOVED***
require('../middleware/auth')

//Schema to map to a MongoDB collection defining a task within a collection
const taskSchema = new mongoose.Schema(***REMOVED***
  title: ***REMOVED***
    type: String,
    required: true
  },
  description: ***REMOVED***
    type: String,
    trim: true
  },
  completed: ***REMOVED***
    type: Boolean,
  },
  hyperlink: ***REMOVED***
        type: String,
        required: false,
    },
    timestamps: Boolean

})

const Task = mongoose.model("Task", taskSchema);


module.exports = Task;
