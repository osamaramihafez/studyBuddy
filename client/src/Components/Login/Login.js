import React from "react";
import ***REMOVED*** Button, Form, Container } from "react-bootstrap";
import "./Login.css";

class LoginForm extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super();
    this.props = props;
  }
  render() ***REMOVED***
    return (
      <Container className="Login">
        <Form onSubmit=***REMOVED***this.props.loginHandler}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              onChange=***REMOVED***this.props.updateEmail}
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="pwdInp">
            <Form.Control
              onChange=***REMOVED***this.props.updatePassword}
              type="password"
              placeholder="password"
            />
            <br />
            <Button className="loginButton" variant="success" type="button" className="login-button" onClick=***REMOVED***this.props.loginHandler}>
              Login
           </Button>
            <br />
          </Form.Group>
        </Form>
      </Container >
    );
  }
}

export default LoginForm;