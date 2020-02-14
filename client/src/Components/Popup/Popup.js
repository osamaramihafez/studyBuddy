import React from 'react'
import LoginForm from '../Login/Login'
import RegisterationFrom from '../Register/Register.js'
import './Popup.css'

class Navi extends React.Component {
  render() {
    return (
      <div className="popup">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">StudyBuddy</h2>
        <LoginForm></LoginForm>
        <button onClick={console.log("test")} className="special-link">Not registered? Register here</button>
        <RegisterationFrom />
      </div>
    )
  }
}
export default Navi
