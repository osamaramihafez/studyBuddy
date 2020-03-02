import React from "react";
import { Button, Form, Spinner, Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import Auth from '../../HOC/Auth';

class LoginForm extends React.Component {

  constructor(props) {
    super();
    // this.handleLogin = this.login.bind(this);
  }
  
  state = {
    email: "",
    password: "",
    buttonText: "Login"
  }

  updateText(buttonText) {
    this.setState({buttonText})
  }
  updatePassword(password) {
    this.setState({ password });
  }

  updateEmail(email) {
    this.setState({ email });
  }

  getToken() {
    const cookies = new Cookies();
    const cookie = cookies.get('Authorization');
    return cookie;
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

  sendReq = async () =>  {
    const post = {
      title: "Test",
      description: "test123"
    }
    try {
      const res = await axios.post('http://localhost:8000/create/task', post, {
        headers: {
          Authorization: this.getToken()
        }
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  async handleLogin(e, state) {
    e.preventDefault();
    console.log(state);
    try {
      const res = await axios.post("http://localhost:8000/user/login", state)
      const cookies = new Cookies();
      cookies.set('Authorization', 'Bearer ' + res.data.tk);
      Auth.authenticate();
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Container className="Login">
        <Form onSubmit={e => this.handleLogin(e, this.state)}>
            <Form.Group controlId="email">
            <Form.Control
              type="email"
              onChange={e => this.updateEmail(e.target.value)}
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
        </Form.Group>
          <Form.Group controlId="formBasicPassword" className="pwdInp">
            <Form.Control
              onChange={e => this.updatePassword(e.target.value)}
              type="password"
              placeholder="password"
            />
        <br/>
          <Button className="loginButton" variant="success" type="submit" className="login-button" onClick={this.props.handler}>
            Login
           </Button>
          </Form.Group>
          <Row>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;