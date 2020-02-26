import React from 'react'

class Tasks extends React.Component {
    constructor() {
        super()

        this.state = {
            newTask:"",
            taskList:[], //list of task objects
            newGroup:"",
            groupsList:[], //list of strings of distinct groups
            chosenGroup:""
          }
    }

    addTask() {
        //create item with unique id
        const appendTask={
          id: 1 + Math.random(),
          value: this.state.newTask.valueOf(),
          group: this.state.chosenGroup.valueOf()
        };
    
        //copy of current list of items
        const list = [...this.state.taskList]
    
        //add new item to list
        list.push(appendTask)
    
        //update state with new list and reset newItem input
        this.setState({
          newItem:"",
          taskList:list
        });
    }
    
    updateTaskInput(value) {
        this.setState ({
            newTask: value
        });
    }

    addGroup() {
    
        //copy of current list of items
        const list = [...this.state.groupsList]

        list.push(this.state.newGroup)
        //update state with new list and reset newItem input
        this.setState({
          newGroup:"",
          groupsList:list
        });
    }
    
    updateGroupInput(value) {
        this.setState ({
            newGroup: value
        });
    }

    chooseGroup(value) {
        this.setState ({
            chosenGroup: value.valueOf()
        });
    }

    deleteTask(id) {
        const list = [...this.state.taskList]
        
        const updatedList = list.filter(item => item.id!==id);

        this.setState({
                taskList:updatedList
        });
    }

    deleteGroup(group) {
        //todo
    }

    render() {
        return (
            <div class="tasksList">
                <ul>
                    {this.state.groupsList.map(group => {
                        return (
                        <li>
                            {group} 
                            <button onClick={() => this.deleteGroup(group)}>
                                -
                            </button>
                        </li>
                        )
                    })}
                </ul>
                <button onClick={() => this.addGroup()}>
                +
                </button>
                <input 
                    type="text"
                    placeholder="Add Group"
                    value={this.state.newGroup}
                    onChange={e => this.updateGroupInput(e.target.value)}
                />
                <ul>
                    {this.state.taskList.map(task => {
                        return (
                        <li key={task.id}>
                            <p>
                                {task.value} - {task.group}
                                <button onClick={() => this.deleteTask(task.id)}>
                                -
                                </button>
                            </p>
                            
                        </li>
                        )
                    })}
                </ul>
                <button onClick={() => this.addTask()}>
                +
                </button>
                <input 
                    type="text"
                    placeholder="Add task"
                    value={this.state.newTask}
                    onChange={e => this.updateTaskInput(e.target.value)}
                />
                <select name="Groups" onChange={e => this.chooseGroup(e.target.value)}>
                    <option value="" disabled selected hidden>Groups</option>
                    {this.state.groupsList.map(group => {
                        return (
                        <option value={group}>
                            {group}
                        </option>
                        )
                    })}
                </select>
                
            </div>  
        )
    }
}

export default Tasks