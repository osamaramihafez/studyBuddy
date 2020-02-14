import React from 'react'
import {
  Button,
  } from 'reactstrap';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
            <label>
                <input type="text" id="emailInp" placeholder="email" />
                <input type="password" id="pwdInp" placeholder="password" />
            </label>
            <hr></hr>
            <Button color="primary">Login</Button>
        </form>
      </div>
    )
  }
}
export default LoginForm
