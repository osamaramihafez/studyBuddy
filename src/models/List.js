***REMOVED***

const listSchema = new mongoose.Schema(***REMOVED***
    title: ***REMOVED***
        type: String,
        required: true,
    },

    userid: ***REMOVED***
          type: mongoose.ObjectId,
          required: true,
    }
})

listSchema.methods.addTask = async function (task) ***REMOVED***
    const list = this;
    list.tasks = list.tasks.append(task._id)
    await list.save();
    return list.tasks;
  };

listSchema.virtual('listId').get(function() ***REMOVED***
    return this._id;
***REMOVED***


const List = mongoose.model("Lists", listSchema);


module.exports = List
