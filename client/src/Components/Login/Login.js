import React from "react";
import ***REMOVED*** Button, Form, Spinner, Container, Row } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import decode from 'jwt-decode';
import Cookies from 'universal-cookie';

class LoginForm extends React.Component ***REMOVED***

  constructor(props) ***REMOVED***
    super();
  }
  
  state = ***REMOVED***
    email: "",
    password: "",
    buttonText: "Login"
  }

  updateText(buttonText) ***REMOVED***
    this.setState(***REMOVED***buttonText})
  }
  updatePassword(password) ***REMOVED***
    this.setState(***REMOVED*** password ***REMOVED***
  }

  updateEmail(email) ***REMOVED***
    this.setState(***REMOVED*** email ***REMOVED***
  }

  getToken() ***REMOVED***
    const cookies = new Cookies();
    const cookie = cookies.get('Authorization');
    return cookie;
  }

  isLoggedIn() ***REMOVED***
    try ***REMOVED***
      const tk = this.getToken();
      const decoded = decode(tk);
      if(decoded.exp < Date.now() / 1000) ***REMOVED***
          return false;
        }
      return true;
    } catch (error) ***REMOVED***
      return false;
    }
  }

  sendReq = async () =>  ***REMOVED***
    const post = ***REMOVED***
      title: "Test",
      description: "test123"
    }
    try ***REMOVED***
      const res = await axios.post('http://localhost:8000/create/task', post, ***REMOVED***
        headers: ***REMOVED***
          Authorization: this.getToken()
        }
      })
      console.log(res);
    } catch (error) ***REMOVED***
      console.log(error);
    }
  }
  async handleLogin(e, state) ***REMOVED***
    e.preventDefault();
    console.log(state);
    try ***REMOVED***
      const res = await axios.post("http://localhost:8000/user/login", state)
      const cookies = new Cookies();
      cookies.set('Authorization', 'Bearer ' + res.data.tk);
    } catch (error) ***REMOVED***
      console.log(error);
    }
  }
  render() ***REMOVED***
    return (
      <Container className="Login">
        <Form onSubmit=***REMOVED***e => this.handleLogin(e, this.state)}>
            <Form.Group controlId="email">
            <Form.Control
              type="email"
              onChange=***REMOVED***e => this.updateEmail(e.target.value)}
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
        </Form.Group>
          <Form.Group controlId="formBasicPassword" className="pwdInp">
            <Form.Control
              onChange=***REMOVED***e => this.updatePassword(e.target.value)}
              type="password"
              placeholder="password"
            />
        <br/>
          <Button className="loginButton" variant="success" type="submit" className="login-button" onClick=***REMOVED***this.props.handler}>
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