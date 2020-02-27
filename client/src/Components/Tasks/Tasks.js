import React from 'react'
import './Tasks.css'

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
        if(this.state.newTask.trim()){
            const appendTask={
            id: 1 + Math.random(),
            value: this.state.newTask.trim().valueOf(),
            group: this.state.chosenGroup.valueOf()
            };
        
            //copy of current list of items
            const list = [...this.state.taskList]
        
            //add new item to list
            list.push(appendTask)
        
            //update state with new list and reset newItem input
            this.setState({
                newTask:"",
                taskList:list
            });
        }
    }
    
    updateTaskInput(value) {
        this.setState ({
            newTask: value
        });
    }

    addGroup() {
        if(this.state.newGroup.trim()) {
            //copy of current list of items
            const list = [...this.state.groupsList]

            
            list.push(this.state.newGroup.trim())
            
            //update state with new list and reset newItem input
            this.setState({
                newGroup:"",
                groupsList:list
            });
        }   
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
        const list = [...this.state.taskList]

        const updatedList = list.filter(item => item.group!==group);

        const groupsList = [...this.state.groupsList]

        const updatedGroupsList = groupsList.filter(item => item!==group)

        this.setState({
            taskList:updatedList,
            groupsList:updatedGroupsList,
        }); 
    }

    filterGroup(group) {

    }

    render() {
        return (
            <div className="taskClassContainer">
                <div className="groupsContainer">
                    <h1>Groups</h1>
                    <br/>
                    <ul>
                        {this.state.groupsList.map(group => {
                            return (
                            <li>
                                {group}<p> </p>
                                <select className="groupNames">
                                    <option value="" disabled selected hidden>...</option>
                                    <option value="Filter" onClick={() => this.filterGroup(group)}>Filter</option>
                                    <option value="Delete" onClick={() => this.deleteGroup(group)}>Delete</option>
                                </select>
                            </li>
                            )
                        })}
                    </ul>
                    <div className="groupInput">
                        <button className="addButton" onClick={() => this.addGroup()}>
                            +
                        </button>
                        <input 
                            type="text"
                            placeholder="Add Group"
                            value={this.state.newGroup}
                            onChange={e => this.updateGroupInput(e.target.value)}
                        />
                    </div>
                </div>
                <div className="tasksContainer">
                    <h1>Tasks</h1>
                    <br/>
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
                    <div className = "taskInput">
                        <button className="addButton" onClick={() => this.addTask()}>
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
                </div>
            </div>  
        )
    }
}

export default Tasks