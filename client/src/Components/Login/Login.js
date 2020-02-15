import React from "react";
import ***REMOVED*** FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";

class LoginForm extends React.Component ***REMOVED***
  state = ***REMOVED***
    email: "",
    password: "",
  }

  validateForm() ***REMOVED***
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  updatePassword(password) ***REMOVED***
    this.setState(***REMOVED*** password ***REMOVED***
  }

  updateEmail(email) ***REMOVED***
    this.setState(***REMOVED*** email ***REMOVED***
  }

  handleLogin(e, state) ***REMOVED***
    e.preventDefault();
    console.log(state);
  }
  render() ***REMOVED***
    return (
      <div className="Login">
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