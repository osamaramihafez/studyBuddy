import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import ***REMOVED*** Draggable } from 'react-beautiful-dnd';
import Button from 'react-bootstrap/Button';
import Task from './task';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: $***REMOVED***props => (props.isDragging ? 'lightblue' : 'white')};
`;



export default class AddTask extends React.Component ***REMOVED***
  constructor()***REMOVED***
    super();
    this.state = ***REMOVED***
      text: ' '
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e)***REMOVED***
    this.setState(***REMOVED***text: e.target.value***REMOVED***
  }




  render() ***REMOVED***
    return (
          <Container
          >
            <input type="text" value=***REMOVED***this.state.text} id="newtask" onChange=***REMOVED***this.changeText} />
            <Button variant="outline-primary" onClick=***REMOVED***this.props.addTask.bind(this.state.text,this.state.id)}>Add Task</Button>
          </Container>

    );
  }
}
