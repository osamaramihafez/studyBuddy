import React from 'react';
import initialData from './initial-data';
import Column from './column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import AddTask from './AddTask';
import axios from 'axios';


const Container = styled.div`
  display: flex;
`;
class SessionList extends React.Component {
  constructor(props){
    super(props);
    this.createTask = this.createTask.bind(this);
    this.createList = this.createList.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  state = {
  userData: [],
  newList: '',
  user: ''
  }

  componentDidMount() { //need to do later 
    axios.get(`http://localhost:3000/`, {
      params: {
        id: this.props.userId
      }
    })
      .then(res => {
        
        this.setState({ userData: res.data });
        this.setState({user: res.data.user})
      })
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      }

      this.setState(newState);
      return;
    }

    //Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);

  };

createTask(text){
  axios.put(`http://localhost:3000/`, {
    params: {
      id: this.props.userId
    }
  })
    .then(res => {
      const userLists = res.data;
      this.setState({ userData: userLists });
    })




}  

addTask(text){ //when user switchin tasks between lists



}


deleteTask(){ //when user deletes task permanently

}

handleListChange(event) {
  this.setState({newList: event.target.value});
}

addList(){ //add new list

  axios.post('/list/create', {
    title: this.state.newList,
    user: this.state.user
  })
  .then(function (response) {
    this.setState({
      newList: ' '
    });
  })
  .catch(function (error) {
    console.log(error);
  });

}


deleteList(){ //delete the list permanently

}

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <Container id="sessionList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                //maps the created lists 
                return <Column key={column.id} column={column} tasks={tasks} index={index} createTask={this.createTask} deleteTask={this.deleteTask} />;
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
        <form onSubmit={this.addList}> /* to add the new list */
          <label>
            Add List
            <textarea value={this.state.newList} onChange={this.handleListChange} />
          </label>
          <input type="submit" value="Add List" />
        </form>
      </DragDropContext>
    );
  }
}

export default SessionList;
