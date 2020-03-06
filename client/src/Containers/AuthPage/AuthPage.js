import React from 'react'
import './AuthPage.css'
import Popup from '../../Components/Popup/Popup';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ***REMOVED*** Button, Form, Spinner, Container, Row, Alert } from "react-bootstrap";


class AuthPage extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super();
    this.state = ***REMOVED***
      email: "",
      password: "",
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updatePassword(password) ***REMOVED***
    this.setState(***REMOVED*** password: password.target.value ***REMOVED***
  }

  updateEmail(email) ***REMOVED***
    this.setState(***REMOVED*** email: email.target.value ***REMOVED***

  }
  async handleLogin() ***REMOVED***
    try ***REMOVED***
      const res = await axios.post("http://localhost:8000/user/login", ***REMOVED***
        email: this.state.email,
        password: this.state.password
      })
      const cookies = new Cookies();
      cookies.set('Authorization', 'Bearer ' + res.data.tk);
    } catch (error) ***REMOVED***
      throw new Error(error);
    }
  }
  render() ***REMOVED***
    return (
      <div className="container">
        <Popup
          loginHandler=***REMOVED***this.handleLogin}
          updateEmail=***REMOVED***this.updateEmail}
          updatePassword=***REMOVED***this.updatePassword}>
        </Popup>
      </div >
    )
  }
}

export default AuthPage;