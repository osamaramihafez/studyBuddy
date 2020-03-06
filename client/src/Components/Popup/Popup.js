import React from 'react'
import LoginForm from '../Login/Login'
import RegisterationFrom from '../Register/Register.js'
import ***REMOVED*** Container } from 'reactstrap'
import './Popup.css'

class Popup extends React.Component ***REMOVED***

  constructor(props) ***REMOVED***
    super();
    this.props = props;
  }

  render() ***REMOVED***
    return (
      <Container className="background">
        <div className="popup">
          <h1 className="title">Welcome</h1>
          <h2 className="subtitle">StudyBuddy</h2>
          <br />
          <LoginForm
            loginHandler=***REMOVED***this.props.loginHandler}
            updateEmail=***REMOVED***this.props.updateEmail}
            updatePassword=***REMOVED***this.props.updatePassword}
            className="loginPage"></LoginForm>
          <a href="/register" className="special-link">Not registered? Register here</a>
        </div>
      </Container>
    )
  }
}
export default Popup
