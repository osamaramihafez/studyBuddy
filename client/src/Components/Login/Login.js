import React from "react";
import ***REMOVED*** FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";
import axios from 'axios';
import decode from 'jwt-decode';

class LoginForm extends React.Component ***REMOVED***
  
  state = ***REMOVED***
    email: "",
    password: "",
  }

  updatePassword(password) ***REMOVED***
    this.setState(***REMOVED*** password ***REMOVED***
  }

  updateEmail(email) ***REMOVED***
    this.setState(***REMOVED*** email ***REMOVED***
  }

  getToken() ***REMOVED***
    return localStorage.getItem('id_token')
  }

  isLoggedIn() ***REMOVED***
    try ***REMOVED***
      const tk = this.getToken();
      const decoded = decode(tk);
      if(decoded.exp < Date.now() / 1000) ***REMOVED***
          return false;
        }
      return true;
    } catch (error) ***REMOVED***
      return false;
    }
  }

  setHeader() ***REMOVED***
    Headers['Authorization'] = 'Bearer ' + this.getToken();
  }
  async handleLogin(e, state) ***REMOVED***
    e.preventDefault();
    console.log(state);
    axios.post("http://localhost:8000/user/login", state)
    .then(res => ***REMOVED***
      console.log(res.data.tk);
      localStorage.setItem('id_token', res.data.tk);
      this.setHeader();
    })
    .catch(res => console.log(res.tk));
  }
  render() ***REMOVED***
    return (
      <div className="Login">
        <h1>Welcome to StudyBuddy!</h1>
        <form onSubmit=***REMOVED***e => this.handleLogin(e, this.state)}>
          <FormGroup controlId="email" className="emailInp">
            <FormControl
              autoFocus
              type="email"
              onChange=***REMOVED***e => this.updateEmail(e.target.value)}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup controlId="password" className="pwdInp">
            <FormControl
              onChange=***REMOVED***e => this.updatePassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </FormGroup>
          <Button variant="outline-secondary" type="submit" className="login-button">Submit</Button>
        </form>
      </div >
    );
  }
}

export default LoginForm;