const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    tasks: [{
        task: {
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
        }
    }],
})

listSchema.methods.addTask = async function (task) {
    const list = this;
    list.tasks = list.tasks.append(task)
    await list.save();
    return list.tasks;
  };

const List = mongoose.model("Lists", listSchema);


module.exports = List