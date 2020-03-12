import React, ***REMOVED*** Component } from 'react';
import axios from 'axios';

export default class ProfilePage extends Component ***REMOVED***
    constructor(props) ***REMOVED***
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = ***REMOVED***
            name: '',
            email: '',
            tokens: [],
            tasks: [],
        }
    }

    componentDidMount() ***REMOVED***
        axios.get('http://localhost:3000/Task/')
        .then(response => ***REMOVED***
          this.setState(***REMOVED*** tasks: response.data })
        })
        .catch((error) => ***REMOVED***
          console.log(error);
        })
    
        axios.get('http://localhost:3000/users/' + this.props.match.params.id)
          .then(response => ***REMOVED***
            if (response.data.length > 0) ***REMOVED***
              this.setState(***REMOVED***
                name: response.data.name,
                email: response.data.email,
                tokens: response.data.tokens,
              })
            }
          })
          .catch((error) => ***REMOVED***
            console.log(error);
          })
    }

    onChangeName(e) ***REMOVED***
        this.setState(***REMOVED***
          name: e.target.value
        })
    }

    onChangeEmail(e) ***REMOVED***
        this.setState(***REMOVED***
          email: e.target.value
        })
    }

    onSubmit(e) ***REMOVED***
        e.preventDefault();
    
        const user = ***REMOVED***
          name: this.state.username,
          email: this.state.email,
          tokens: this.state.tokens,
          tasks: this.state.tasks
        }
    
        console.log(user);
        axios.post('http://localhost:3000/User/update/' + this.props.match.params.id, user)
            .then(res => console.log(res.data));
    }
      
  render() ***REMOVED***
    return (
        <div>
        <h3 id="profilepg">Profile Page</h3>
        <hr color="white"></hr>
        <form onSubmit=***REMOVED***this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value=***REMOVED***this.state.name}
                    onChange=***REMOVED***this.onChangeName}
                    />
            </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value=***REMOVED***this.state.email}
                onChange=***REMOVED***this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <label>Tokens: </label>
            <input 
                type="text" 
                className="form-control"
                value=***REMOVED***this.state.tokens}
                />
          </div>
          <div className="form-group">
            <input id='editprofpag' type="submit" value="Edit Profile Page" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}