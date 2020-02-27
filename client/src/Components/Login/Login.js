import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import "./Login.css";
import axios from 'axios';
import decode from 'jwt-decode';

class LoginForm extends React.Component {
  
  state = {
    email: "",
    password: "",
  }

  updatePassword(password) {
    this.setState({ password });
  }

  updateEmail(email) {
    this.setState({ email });
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  isLoggedIn() {
    try {
      const tk = this.getToken();
      const decoded = decode(tk);
      if(decoded.exp < Date.now() / 1000) {
          return false;
        }
      return true;
    } catch (error) {
      return false;
    }
  }

  setHeader() {
    Headers['Authorization'] = 'Bearer ' + this.getToken();
  }
  async handleLogin(e, state) {
    e.preventDefault();
    console.log(state);
    axios.post("http://localhost:8000/user/login", state)
    .then(res => {
      console.log(res.data.tk);
      localStorage.setItem('id_token', res.data.tk);
      this.setHeader();
    })
    .catch(res => console.log(res.tk));
  }
  render() {
    return (
      <div className="Login">
        <h1>Welcome to StudyBuddy!</h1>
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