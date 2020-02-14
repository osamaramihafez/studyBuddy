import React from 'react'
import ***REMOVED***
  Button,
  } from 'reactstrap';

class LoginForm extends React.Component ***REMOVED***
  render() ***REMOVED***
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
