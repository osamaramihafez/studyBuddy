import React from 'react';
import styled from 'styled-components';
import ***REMOVED*** Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';

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
  background-color: $***REMOVED***props => (props.isDraggingOver ? 'lightgreen' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component ***REMOVED***
  render() ***REMOVED***
    return (
      <Draggable draggableId=***REMOVED***this.props.column.id} index=***REMOVED***this.props.index}>
        ***REMOVED***provided => (
          <Container ***REMOVED***...provided.draggableProps} ref=***REMOVED***provided.innerRef}>
            <Title ***REMOVED***...provided.dragHandleProps}>***REMOVED***this.props.column.title}</Title>
            <Droppable droppableId=***REMOVED***this.props.column.id} type="task">
              ***REMOVED***(provided,snapshot) => (
                <TaskList
                  ref=***REMOVED***provided.innerRef}
                  ***REMOVED***...provided.droppableProps}
                  isDraggingOver=***REMOVED***snapshot.isDraggingOver}
                >
                  ***REMOVED***this.props.tasks.map((task, index) => (
                    <Task key=***REMOVED***task.id} task=***REMOVED***task} index=***REMOVED***index} />
                  ))}
                  ***REMOVED***provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
