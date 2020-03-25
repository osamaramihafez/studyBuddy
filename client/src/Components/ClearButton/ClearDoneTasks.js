import React from 'react'
import UIfx from 'uifx'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import './ClearDoneTasks.css'
//npm install axios

class ClearDoneTasks extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.clear = this.clear.bind(this);

    this.state = ***REMOVED***
      tasks: [],
    }
  }

  clear() ***REMOVED***
      //store all the tasks in a list
      axios.get('http://localhost:3000/Task/')
      .then(response => ***REMOVED***
          if (response.data.length > 0) ***REMOVED***
              this.setState(***REMOVED***
                tasks: response.data,
              })
          }
      })
      .catch((error) => ***REMOVED***
          console.log(error);
      })
      //loop over all tasks in database and delete the ones with a completed status of true
      for (var key in this.tasks) ***REMOVED***
        if (this.tasks.hasOwnProperty(key)) ***REMOVED***
            if (this.tasks[key].completed) ***REMOVED***
                this.deleteTask(this.tasks[key]._id);
            }
        }
     };  
  }

  deleteTask(id)***REMOVED***
    //delete the task from the database
    axios.delete('http://localhost:3000/Task/delete/task/'+id)
      .then(res => console.log(res.data));
    //Removes the task from the list 'tasks'
    // this.setState(***REMOVED***
    //     tasks: this.state.tasks.filter(el => el._id !== id)
    // })
  }

  render() ***REMOVED***
    return (
        <Button ref="clearBtn" onClick=***REMOVED***this.clear}>
        </Button>
    )
  }
}
export default ClearDoneTasks