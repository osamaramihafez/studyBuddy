import React from 'react'
import LoginForm from '../Login/Login'
import RegisterationFrom from '../Register/Register.js'
import './Popup.css'

class Navi extends React.Component ***REMOVED***
  render() ***REMOVED***
    return (
      <div className="popup">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">StudyBuddy</h2>
        ***REMOVED***/* <LoginForm></LoginForm> */}
        <RegisterationFrom></RegisterationFrom>
        <button className="special-link">Not registered? Register here</button>
      </div>
    )
  }
}
export default Navi
