import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import ***REMOVED*** Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 7px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: $***REMOVED***props => (props.isDragging ? 'lightblue' : 'white')};
`;



export default class Task extends React.Component ***REMOVED***

  updateTask(e, state) ***REMOVED***
    //This will allow the user to update the task within the actual database.
    //This cannot be completed until we allow the user physically manipulate how the task looks
    // i.e. Add an image, add a hyperlink, 
    e.preventDefault();
    console.log(state);
    axios.post("http://localhost:8000/task/update", state)
    .then(res => ***REMOVED***
      console.log(res.data.tk);
      localStorage.setItem('id_token', res.data.tk);
      this.setHeader();
    })
    .catch(res => console.log(res.tk));
  }

  render() ***REMOVED***
    return (
      <Draggable draggableId=***REMOVED***this.props.task.id} index=***REMOVED***this.props.index}>
        ***REMOVED***(provided,snapshot) => (
          <Container
            ***REMOVED***...provided.draggableProps}
            ***REMOVED***...provided.dragHandleProps}
            ref=***REMOVED***provided.innerRef}
            isDragging=***REMOVED***snapshot.isDragging}
          >
            ***REMOVED***this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
