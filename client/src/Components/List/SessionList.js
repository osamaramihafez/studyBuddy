import React from 'react';
import initialData from './initial-data';
import Column from './column';
import ***REMOVED*** DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import AddTask from './AddTask';
import axios from 'axios';
import Auth from '../../HOC/Auth'


const Container = styled.div`
  display: flex;
`;
class SessionList extends React.Component ***REMOVED***
  constructor(props)***REMOVED***
    super(props);
    this.createTask = this.createTask.bind(this);
    // this.createList = this.createList.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleListChange = this.handleListChange.bind(this)
  }
  state = ***REMOVED***
  userData: [],
  newList: '',
  user: '',
  columnOrder: []
  }

  componentDidMount() ***REMOVED*** //need to do later 
    // axios.get(`http://localhost:3000/`, ***REMOVED***
    //   params: ***REMOVED***
    //     id: this.props.userId
    //   }
    // })
    //   .then(res => ***REMOVED***
        
    //     this.setState(***REMOVED*** userData: res.data ***REMOVED***
    //     this.setState(***REMOVED***user: res.data.user})
    //   })
  }

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

createTask(text)***REMOVED***
  // axios.put(`http://localhost:3000/`, ***REMOVED***
  //   params: ***REMOVED***
  //     id: this.props.userId
  //   }
  // })
  //   .then(res => ***REMOVED***
  //     const userLists = res.data;
  //     this.setState(***REMOVED*** userData: userLists ***REMOVED***
  //   })




}  

addTask(text)***REMOVED*** //when user switchin tasks between lists



}


deleteTask()***REMOVED*** //when user deletes task permanently

}

handleListChange(event) ***REMOVED***
  this.setState(***REMOVED***newList: event.target.value***REMOVED***
}

addList(e)***REMOVED*** //add new list
  e.preventDefault();
  axios.defaults.headers = ***REMOVED***
    Authorization: Auth.getToken()
}     
  axios.post('http://localhost:8000/list/create', ***REMOVED***
    title: this.state.newList,
  })
  .then(function (response) ***REMOVED***
    this.setState(***REMOVED***
      newList: ''
    ***REMOVED***
  })
  .catch(function (error) ***REMOVED***
    console.log(error);
  ***REMOVED***

}


deleteList()***REMOVED*** //delete the list permanently

}

  render() ***REMOVED***
    return (
      <DragDropContext onDragEnd=***REMOVED***this.onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          ***REMOVED***provided => (
            <Container id="sessionList"
              ***REMOVED***...provided.droppableProps}
              ref=***REMOVED***provided.innerRef}
            >
              ***REMOVED***this.state.columnOrder.map((columnId, index) => ***REMOVED***
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
                //maps the created lists 
                return <Column key=***REMOVED***column.id} column=***REMOVED***column} tasks=***REMOVED***tasks} index=***REMOVED***index} createTask=***REMOVED***this.createTask} deleteTask=***REMOVED***this.deleteTask} />;
              })}
              ***REMOVED***provided.placeholder}
            </Container>
          )}
        </Droppable>
        <form onSubmit=***REMOVED***e => this.addList(e)}>
          <label>
            Add List
            <textarea value=***REMOVED***this.state.newList} onChange=***REMOVED***this.handleListChange} />
          </label>
          <input type="submit" value="Add List" />
        </form>
      </DragDropContext>
    );
  }
}

export default SessionList;
