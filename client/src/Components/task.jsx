import React from 'react';
import styled from 'styled-components';
import ***REMOVED*** Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: $***REMOVED***props => (props.isDragging ? 'lightblue' : 'white')};
`;



export default class Task extends React.Component ***REMOVED***
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
