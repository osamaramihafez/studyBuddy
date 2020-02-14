import React from 'react'
import LoginForm from '../Login/Login'
import classes from './Popup.css'

class Navi extends React.Component {
  render() {
    return (
      <div className={classes.Popup}>
        <h1 className="display-3">Welcome</h1>
        <h4 className="display-3">StudyBuddy</h4>
        <LoginForm></LoginForm>
      </div>
    )
  }
}
export default Navi
