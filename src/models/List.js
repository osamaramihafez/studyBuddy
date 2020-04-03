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

listSchema.virtual('listId').get(function() ***REMOVED***
    return this._id;
***REMOVED***


const List = mongoose.model("Lists", listSchema);


module.exports = List
