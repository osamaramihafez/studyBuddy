***REMOVED***
require('../middleware/auth')

//Schema to map to a MongoDB collection defining a task within a collection
const taskSchema = new mongoose.Schema(***REMOVED***
  content: ***REMOVED***
    type: String,
    required: true
  },
  completed: ***REMOVED***
    type: Boolean,
  },
  listid: ***REMOVED***
    type: mongoose.ObjectId,
    required: true,
  }
})

taskSchema.virtual('taskId').get(function() ***REMOVED***
  return this._id;
***REMOVED***

const Task = mongoose.model("Task", taskSchema);


module.exports = Task;
