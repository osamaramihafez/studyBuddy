import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import SessionList from '../List/SessionList';



const Container = styled.div`
  display: flex;
`;
class Day extends React.Component {
  state = {
      days: {
      
        }
  };

  createTableModel = () => {
    for (var day = 0; day < 29; day++){
        this.state.days[day] = <SessionList></SessionList>
      }
  };


  render() {
    return (  
      <SessionList></SessionList>
    ); 
  }
}

export default Day;
