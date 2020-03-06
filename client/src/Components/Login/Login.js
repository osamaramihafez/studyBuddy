import React from "react";
import { Button, Form, Spinner, Container, Row, Alert } from "react-bootstrap";
import "./Login.css";


class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Container className="Login">
        {/* <Alert variant="success">Login successful! Please wait while we redirect you
          <Spinner
            animation="border"
            role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> 
        </Alert> */}
        <Form onSubmit={this.props.loginHandler}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              onChange={this.props.updateEmail}
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="pwdInp">
            <Form.Control
              onChange={this.props.updatePassword}
              type="password"
              placeholder="password"
            />
            <br />
            <Button className="loginButton" variant="success" type="button" className="login-button" onClick={this.props.loginHandler}>
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