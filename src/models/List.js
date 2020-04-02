const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    userid: {
          type: mongoose.ObjectId,
          required: true,
    }
})

listSchema.methods.addTask = async function (task) {
    const list = this;
    list.tasks = list.tasks.append(task._id)
    await list.save();
    return list.tasks;
  };

listSchema.virtual('listId').get(function() {
    return this._id;
});


const List = mongoose.model("Lists", listSchema);


module.exports = List
