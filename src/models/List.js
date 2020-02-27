***REMOVED***

const listSchema = new mongoose.Schema(***REMOVED***
    title: ***REMOVED***
        type: String,
        required: true,
        trim: true
    },
    tasks: [***REMOVED***
        task: ***REMOVED***
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
            timestamps: true
        }
    }],
})

listSchema.methods.addTask = async function (task) ***REMOVED***
    const list = this;
    list.tasks = list.tasks.append(task)
    await list.save();
    return list.tasks;
  };

const List = mongoose.model("Lists", listSchema);


module.exports = List