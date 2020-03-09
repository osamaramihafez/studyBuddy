import React from "react";
import ***REMOVED*** Button, Form, Container, Alert, Spinner } from "react-bootstrap";
import "./Login.css";

const LoginForm = (props) => ***REMOVED***
  return (
    <Container className="popup">
      <h1 className="title">Welcome</h1>
      <h2 className="subtitle">StudyBuddy</h2>
      <br />
      <Form onSubmit=***REMOVED***props.loginHandler}>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            onChange=***REMOVED***props.updateEmail}
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="pwdInp">
          <Form.Control
            onChange=***REMOVED***props.updatePassword}
            type="password"
            placeholder="password"
          />
          <br />
          <Button className="loginButton" variant="success" type="submit" className="login-button" onSubmit=***REMOVED***props.loginHandler}>
            Login
           </Button>
          <br />
        </Form.Group>
      </Form>
      <a href="/register" className="special-link">Not registered? Register here</a>
    </Container >
  );
}
export default LoginForm;