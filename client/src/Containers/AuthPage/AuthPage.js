import React from 'react'
import './AuthPage.css'
import axios from 'axios';
import Cookies from 'universal-cookie';
import ***REMOVED*** Container, Alert, Modal, Button, Spinner } from "react-bootstrap";
import LoginForm from '../../Components/Login/Login.js'


class AuthPage extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super();
    this.state = ***REMOVED***
      email: "",
      password: "",
      alert: <div></div>,
      showSpinner: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updatePassword(e) ***REMOVED***
    this.setState(***REMOVED*** password: e.target.value ***REMOVED***
  }

  updateEmail(e) ***REMOVED***
    this.setState(***REMOVED*** email: e.target.value ***REMOVED***

  }

  async handleLogin(e) ***REMOVED***
    e.preventDefault();
    try ***REMOVED***
      const res = await axios.post("http://localhost:8000/user/login", ***REMOVED***
        email: this.state.email,
        password: this.state.password
      })
      const cookies = new Cookies();
      cookies.set('Authorization', 'Bearer ' + res.data.tk);
      this.props.history.push('/dashboard');
    } catch (error) ***REMOVED***
      this.setState(***REMOVED*** alert: <Alert variant="warning">Unable to login! Could not find a matching email and password</Alert> })
    }
  }
  render() ***REMOVED***
    return (
      < Container className="container" >
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Modal>
        <LoginForm
          loginHandler=***REMOVED***this.handleLogin}
          updateEmail=***REMOVED***this.updateEmail}
          updatePassword=***REMOVED***this.updatePassword}
          spinnerHandler=***REMOVED***this.spinnerHandler}>
        </LoginForm>
        ***REMOVED***this.state.alert}
      </Container >
    )
  }
}

export default AuthPage;