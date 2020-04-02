import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { Draggable } from 'react-beautiful-dnd';
import Button from 'react-bootstrap/Button';
import Task from './task';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightblue' : 'white')};
`;



export default class AddTask extends React.Component {
  constructor(props){
    super();
    this.state = {
      text: ' '
    };
    this.props = props;
    this.changeText = this.changeText.bind(this);
  }

  changeText(e){
    this.setState({text: e.target.value});
  }




  render() {
    return (
          <Container
          >
            <input type="text" value={this.state.text} id="newtask" onChange={this.changeText} />
            <Button variant="outline-primary" onClick={this.props.addTask.bind(this.state.text)}>Add Task</Button>
          </Container>

    );
  }
}
