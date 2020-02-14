import React from "react";
import ***REMOVED*** FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";

class LoginForm extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super();
  }

  state = ***REMOVED***
    email: "",
    password: "",
  }

  validateForm() ***REMOVED***
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) ***REMOVED***
    event.preventDefault();
  }

  updatePassword(password) ***REMOVED***
    this.setState(***REMOVED*** password ***REMOVED***
  }

  updateEmail(email) ***REMOVED***
    this.setState(***REMOVED*** email ***REMOVED***
  }
  render() ***REMOVED***
    return (
      <div className="Login">
        <form onSubmit=***REMOVED***this.handleSubmit}>
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
          <Button variant="outline-secondary">Button</Button>
        </form>
      </div >
    );
  }
}

export default LoginForm;