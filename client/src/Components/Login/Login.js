import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super();
  }

  state = {
    email: "",
    password: "",
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateEmail(email) {
    this.setState({ email });
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" className="emailInp">
            <FormControl
              autoFocus
              type="email"
              onChange={e => this.updateEmail(e.target.value)}
              placeholder="email"
            />
          </FormGroup>
          <FormGroup controlId="password" className="pwdInp">
            <FormControl
              onChange={e => this.updatePassword(e.target.value)}
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