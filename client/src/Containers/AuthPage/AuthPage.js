import React from 'react'
import './AuthPage.css'
import Popup from '../../Components/Popup/Popup';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Button, Form, Spinner, Container, Row, Alert } from "react-bootstrap";
import LoginForm from '../../Components/Login/Login.js'

class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });

  }
  async handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      const cookies = new Cookies();
      cookies.set('Authorization', 'Bearer ' + res.data.tk);
    } catch (error) {
      throw new Error(error);
    }
  }
  render() {
    return (
      <div className="container">
        <LoginForm
          loginHandler={this.handleLogin}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}>
        </LoginForm>
      </div >
    )
  }
}

export default AuthPage;