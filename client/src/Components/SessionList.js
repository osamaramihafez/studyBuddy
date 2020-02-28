import React from 'react';
import initialData from './initial-data';
import Column from './column';
import ***REMOVED*** DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
`;
class SessionList extends React.Component ***REMOVED***
  state = initialData;


  onDragEnd = result => ***REMOVED***
    const ***REMOVED*** destination, source, draggableId, type } = result;

    if(!destination) ***REMOVED***
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) ***REMOVED***
      return;
    }

    if (type === 'column') ***REMOVED***
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = ***REMOVED***
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if(start === finish) ***REMOVED***
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = ***REMOVED***
        ...start,
        taskIds: newTaskIds,
      };

      const newState = ***REMOVED***
        ...this.state,
        columns: ***REMOVED***
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      }

      this.setState(newState);
      return;
    }

    //Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = ***REMOVED***
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = ***REMOVED***
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = ***REMOVED***
      ...this.state,
      columns: ***REMOVED***
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);

  };


  render() ***REMOVED***
    return (
      <DragDropContext onDragEnd=***REMOVED***this.onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          ***REMOVED***provided => (
            <Container
              ***REMOVED***...provided.droppableProps}
              ref=***REMOVED***provided.innerRef}
            >
              ***REMOVED***this.state.columnOrder.map((columnId, index) => ***REMOVED***
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                return <Column key=***REMOVED***column.id} column=***REMOVED***column} tasks=***REMOVED***tasks} index=***REMOVED***index} />;
              })}
              ***REMOVED***provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default SessionList;
