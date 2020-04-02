import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';
import AddTask from './AddTask';
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius 2px;
  background-color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightgreen' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  constructor(props){
    super(props);
    this.handleTaskChange.bind(this);
  }

  state = {
    newTask: '',
  }

  handleTaskChange(event) {
    this.setState({newTask: event.target.value});
  }

  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(provided,snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  <AddTask addTask={this.props.addTask}/>
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
            <form onSubmit={this.props.createTask(this.state.newTask)}> /* to add the new list */
              <label>
                Add Task
                <textarea value={this.state.newTask} onChange={this.handleTaskChange} />
              </label>
              <input type="submit" value="Add List" />
            </form>
          </Container>
        )}
      </Draggable>
    );
  }
}
