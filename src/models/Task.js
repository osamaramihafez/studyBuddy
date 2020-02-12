***REMOVED***
require('../middleware/auth')

//Schema to map to a MongoDB collection defining a task within a collection
const taskSchema = new mongoose.Schema(***REMOVED***
  Title: ***REMOVED***
    type: String,
    required: true
    },
  Description:***REMOVED***
    Type: String,
    required: true,
    trim:true
  },
  Completed:***REMOVED***
    type:Boolean,
    required: true
  }
})

const Task = mongoose.model("Task", taskSchema);


module.exports = Task;