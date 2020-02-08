***REMOVED***
require('../middleware/auth')

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