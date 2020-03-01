import React from 'react'
import './AuthPage.css'
import Popup from '../../Components/Popup/Popup';
import LoginForm from '../../Components/Login/Login';

class AuthPage extends React.Component {

  render() {
    return (
      <div className="container">
          <Popup></Popup>
        </div>
    )
  }
}

export default AuthPage