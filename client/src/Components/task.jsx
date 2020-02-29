import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightblue' : 'white')};
`;



export default class Task extends React.Component {

  updateTask(e, state) {
    //This will allow the user to update the task within the actual database.
    //This cannot be completed until we allow the user physically manipulate how the task looks
    // i.e. Add an image, add a hyperlink, 
    e.preventDefault();
    console.log(state);
    axios.post("http://localhost:8000/task/update", state)
    .then(res => {
      console.log(res.data.tk);
      localStorage.setItem('id_token', res.data.tk);
      this.setHeader();
    })
    .catch(res => console.log(res.tk));
  }

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided,snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
