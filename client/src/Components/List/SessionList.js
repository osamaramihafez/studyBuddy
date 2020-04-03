import React from 'react';
import Column from './column';
import ***REMOVED*** DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import axios from 'axios';
import Auth from '../../HOC/Auth'
import ***REMOVED***Button, Form} from 'react-bootstrap';
import './list.css'

const Container = styled.div`
  display: flex;
`;
class SessionList extends React.Component ***REMOVED***
  constructor(props)***REMOVED***
    super(props);
    this.createTask = this.createTask.bind(this);
    // this.createList = this.createList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.createList = this.createList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleListChange = this.handleListChange.bind(this)
  }
  state = ***REMOVED***
    userData: [],
    newList: '',
    user: '',
    columnOrder: []
    }

  componentDidMount() ***REMOVED***
    axios.defaults.headers = ***REMOVED***
      Authorization: Auth.getToken()
    }  
    axios.get(`http://localhost:8000/list/getAll`)
    .then(res => ***REMOVED***
      this.setState(***REMOVED***userData: res.data.lists})
      // console.log(res.data.lists);
      const test = this.state.userData.map(e => ***REMOVED***
        return e.listId;
      ***REMOVED***
      this.setState(***REMOVED***columnOrder: test})
      console.log('BEFORE', this.state.columnOrder);
      ***REMOVED***
  }

  componentWillUnmount() ***REMOVED***

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
      console.log(source.index);
      console.log(destination.index);
      const newColumnOrder = [...this.state.columnOrder];
      [newColumnOrder[source.index], newColumnOrder[destination.index]] = [newColumnOrder[destination.index], newColumnOrder[source.index]];

      const data = [...this.state.userData];
      [data[source.index], data[destination.index]] = [data[destination.index], data[source.index]];

      this.setState(***REMOVED***
        columnOrder: newColumnOrder,
        userData: data
      ***REMOVED***
      console.log('AFTER', this.state.columnOrder);
      return;
    }
    const start = source.droppableId;
    const finish = destination.droppableId;
    if(start === finish) ***REMOVED***
      const list = this.state.userData.filter((e) => ***REMOVED***
        return e.listId === start;
      ***REMOVED***
      const tasks = list[0].tasks;
      [tasks[source.index], tasks[destination.index]] = [tasks[destination.index], tasks[source.index]];

      const newUserData = [...this.state.userData];
      const ind = newUserData.findIndex((e) => ***REMOVED***
         return e.listId === start;
      ***REMOVED***
      newUserData[ind].tasks = tasks;
      return;
    }
    let startList = this.state.userData.filter((e) => ***REMOVED***
      return e.listId === start;
    })[0];
    const tasks = startList.tasks;
    const task = tasks.filter(e => ***REMOVED***
      return e._id === draggableId
    })[0];

    const finishList = this.state.userData.filter((e) => ***REMOVED***
      return e.listId === finish;
    })[0];
    const ind = startList.tasks.findIndex(e => ***REMOVED***
      return e._id === task._id;
    })
    startList.tasks.splice(ind, 1)
    finishList.tasks.push(task);
  };

createTask(e, content, listid)***REMOVED***
  e.preventDefault();
  e.target.reset();
  axios.defaults.headers = ***REMOVED***
    Authorization: Auth.getToken()
  };
  axios.post(`http://localhost:8000/task/create`, ***REMOVED***
    content,
    listid
  })
    .then(res => ***REMOVED***
      const newUserData = [...this.state.userData];
      const ind = newUserData.findIndex((e) => ***REMOVED***
         return e.listId === listid;
      ***REMOVED***
      newUserData[ind].tasks.push(res.data);
      this.setState(***REMOVED***userData: newUserData***REMOVED***
    })
}  

deleteTask(taskId, listId)***REMOVED***

  let startList = this.state.userData.filter((e) => ***REMOVED***
    return e.listId === listId;
  })[0];

  const ind = startList.tasks.findIndex(e => ***REMOVED***
    return e._id === taskId;
  })
  startList.tasks.splice(ind, 1)
  this.setState(***REMOVED******REMOVED***
  axios.defaults.headers = ***REMOVED***
    Authorization: Auth.getToken()
}     
  axios.delete('http://localhost:8000/task/delete/' + taskId).then(res => ***REMOVED***
    console.log(res.body)
  }).catch(e => ***REMOVED***
    console.log(e);
  })
}

handleListChange(event) ***REMOVED***
  this.setState(***REMOVED***newList: event.target.value***REMOVED***
}

createList(e)***REMOVED*** //add new list
  e.preventDefault();
  axios.defaults.headers = ***REMOVED***
    Authorization: Auth.getToken()
}     
  axios.post('http://localhost:8000/list/create', ***REMOVED***
    title: this.state.newList,
  })
  .then(res => ***REMOVED***
    console.log(res.data);
    const newList = ***REMOVED***
      listId: res.data._id,
      listTitle: res.data.title,
      tasks: []
    }
    this.setState(***REMOVED***userData: [
      ...this.state.userData,
      newList
    ]***REMOVED***
    console.log(this.state.userData);
    const test = this.state.userData.map(e => ***REMOVED***
      return e.listId;
    ***REMOVED***
    this.setState(***REMOVED***columnOrder: test})
  })
}


deleteList(listId)***REMOVED*** //delete the list permanently
  const list = this.state.userData;
  const ind = list.findIndex(e => ***REMOVED***
    return e.listId === listId;
  })
  console.log(ind);
  this.state.userData.splice(ind, 1);
  const first = this.state.columnOrder.slice(0, ind);
  const last = this.state.columnOrder.slice(ind);
  console.log(first, last)
  this.setState(***REMOVED***
    columnOrder: [...first, ...last]
  })
  // this.setState(***REMOVED***})
  // axios.defaults.headers = ***REMOVED***
  //   Authorization: Auth.getToken()
  // }     
  // axios.post('http://localhost:8000/list/delete' + listId)
}

  render() ***REMOVED***
    return (
      <DragDropContext onDragEnd=***REMOVED***this.onDragEnd}>
        <div className="session-list">
        <Form action="submit" onSubmit=***REMOVED***e => this.createList(e)}>
          <Form.Control
            placeholder="List Name"
            aria-label="List Name"
            aria-describedby="basic-addon1"
            onChange=***REMOVED***this.handleListChange}
          />
          <Button variant="outline-primary" type="submit">Add List</Button>
        </Form>
        </div>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          ***REMOVED***provided => (
            <Container id="sessionList"
              ***REMOVED***...provided.droppableProps}
              ref=***REMOVED***provided.innerRef}
            >
              ***REMOVED***this.state.columnOrder.map((e, index) => ***REMOVED***
                const column = this.state.userData[index];
                console.log(index, column)
                const tasks = column.tasks;
                //maps the created lists 
                return <Column 
                  key=***REMOVED***column.listId} 
                  column=***REMOVED***column} 
                  tasks=***REMOVED***tasks} 
                  index=***REMOVED***index} 
                  createTask=***REMOVED***this.createTask} 
                  deleteTask=***REMOVED***this.deleteTask}
                  deleteList=***REMOVED***this.deleteList} />;
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