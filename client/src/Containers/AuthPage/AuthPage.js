import React from 'react'
import './AuthPage.css'
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Container, Alert } from "react-bootstrap";
import LoginForm from '../../Components/Login/Login.js'


class AuthPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      test: <div></div>
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
      this.props.history.push('/dashboard');
    } catch (error) {
      this.setState({ test: <Alert variant="warning">Unable to login, if you do not have an account, please create one here</Alert> })
    }
  }
  render() {
    return (
      <Container className="container">
        <LoginForm
          loginHandler={this.handleLogin}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          spinnerHandler={this.spinnerHandler}>
        </LoginForm>
        {this.state.test}
      </Container >
    )
  }
}

export default AuthPage;