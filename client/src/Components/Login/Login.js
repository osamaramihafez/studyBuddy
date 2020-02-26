import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";
import axios from 'axios';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateEmail(email) {
    this.setState({ email });
  }

  async handleLogin(e, state) {
    e.preventDefault();
    console.log(state);
    const res = await axios.post("localhost:3000/user/login", state);
    if(res.status === '200') {
      // Load the other stuff
    }
    else {
      // send a popup to tell the user the login failed
    }
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={e => this.handleLogin(e, this.state)}>
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
          <Button variant="outline-secondary" type="submit" className="login-button">Submit</Button>
        </form>
      </div >
    );
  }
}

export default LoginForm;