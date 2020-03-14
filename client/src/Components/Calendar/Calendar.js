import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Day from './day';



const Container = styled.div`
  display: flex;
`;
class Calendar extends React.Component {
  state = {
      days: {
      
        }
  };

  createTableModel = () => {
    for (var day = 0; day < 29; day++){
        this.days[day] = <Day></Day>
      }
  };


  render() {
    return (  
        <Day></Day>
    ); 
  }
}

export default Calendar;
