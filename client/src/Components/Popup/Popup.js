import React from 'react'
import LoginForm from '../Login/Login'
import RegisterationFrom from '../Register/Register.js'
import { Container } from 'reactstrap'
import './Popup.css'

const Popup = (props) => {
  return (
    <Container className="background">
      <div className="popup">
        <h1 className="title">Welcome</h1>
        <h2 className="subtitle">StudyBuddy</h2>
        <br />
        <LoginForm
          loginHandler={props.loginHandler}
          updateEmail={props.updateEmail}
          updatePassword={props.updatePassword}
          className="loginPage"></LoginForm>
        <a href="/register" className="special-link">Not registered? Register here</a>
      </div>
    </Container>
  )
}
export default Popup
