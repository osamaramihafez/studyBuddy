import React from 'react'
import LoginForm from '../Login/Login'
import './Popup.css'

class Navi extends React.Component ***REMOVED***
  render() ***REMOVED***
    return (
      <div className="popup">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">StudyBuddy</h2>
        <LoginForm></LoginForm>
        <a href="#" className="special-link">Not registered? Register here</a>
      </div>
    )
  }
}
export default Navi
