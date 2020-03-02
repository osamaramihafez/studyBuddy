import React from 'react'
import './AuthPage.css'
import Popup from '../../Components/Popup/Popup';

class AuthPage extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super();
    this.user = props.user;
  }
  render() ***REMOVED***
    return (
      <div className="container">
          <Popup loginHandler=***REMOVED***this.props.loginHandler}></Popup>
        </div>
    )
  }
}

export default AuthPage