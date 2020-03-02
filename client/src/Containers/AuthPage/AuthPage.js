import React from 'react'
import './AuthPage.css'
import Popup from '../../Components/Popup/Popup';

class AuthPage extends React.Component {
  constructor(props) {
    super();
    this.user = props.user;
  }
  render() {
    return (
      <div className="container">
          <Popup loginHandler={this.props.loginHandler}></Popup>
        </div>
    )
  }
}

export default AuthPage