import React from 'react';
import styled from 'styled-components';
import ***REMOVED*** Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';
import ***REMOVED***Button, Form} from 'react-bootstrap';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  margin: 8px;
  border: 2px solid white;
  border-radius 7px;
  background-color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  constructor(props)***REMOVED***
    super(props);
    this.handleTaskChange.bind(this);
  }

  state = ***REMOVED***
    newTask: '',
  }

  handleTaskChange(event) ***REMOVED***
    this.setState(***REMOVED***newTask: event.target.value***REMOVED***
  }

  render() ***REMOVED***
    return (
      <Draggable draggableId=***REMOVED***this.props.column.listId} index=***REMOVED***this.props.index}>
        ***REMOVED***provided => (
          <Container ***REMOVED***...provided.draggableProps} ref=***REMOVED***provided.innerRef}>
            <Title 
            ***REMOVED***...provided.dragHandleProps}>***REMOVED***this.props.column.listTitle}
            <IconButton color="secondary" aria-label="upload picture" component="span" onClick=***REMOVED***() => this.props.deleteList(this.props.column.listId)}>
              <ClearIcon />
            </IconButton>
            
            </Title>
            <Droppable droppableId=***REMOVED***this.props.column.listId} type="task">
              ***REMOVED***(provided,snapshot) => (
                <TaskList
                  ref=***REMOVED***provided.innerRef}
                  ***REMOVED***...provided.droppableProps}
                  isDraggingOver=***REMOVED***snapshot.isDraggingOver}
                >
                  ***REMOVED***this.props.tasks.map((task, index) => (
                    <Task key=***REMOVED***task._id} task=***REMOVED***task} index=***REMOVED***index} deleteTask=***REMOVED***this.props.deleteTask} listId=***REMOVED***this.props.column.listId} />
                  ))}
                    <Form action="submit" onSubmit=***REMOVED***e => this.props.createTask(e, this.state.newTask, this.props.column.listId)}>
                      <Form.Control
                        placeholder="Task Name"
                        aria-label="Task Name"
                        aria-describedby="basic-addon1"
                        onChange=***REMOVED***e => this.handleTaskChange(e)}
                      />
                      ***REMOVED***/* <input type="text" value=***REMOVED***this.state.newTask} id="newtask" onChange=***REMOVED***e => this.handleTaskChange(e)} /> */}
                      <Button variant="outline-primary" type="submit">Add Task</Button>
                    </Form>
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
