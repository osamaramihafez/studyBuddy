import React from 'react'
import Auth from '../../HOC/Auth'
import ***REMOVED*** BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage'
import RegistrationFrom from '../../Components/Register/Register.js'
import Dashboard from '../../Components/Dashboard/Dashboard';
import Navbar from '../../Components/Navbar/Navbar';
import ProfilePage from '../../Components/ProfilePage/ProfilePage';

const App = () => ***REMOVED***

  const PrivateRoute = (***REMOVED*** component: Component, ...rest }) => (
    <Route ***REMOVED***...rest} render=***REMOVED***props => Auth.authenticate() ?
      (<Component ***REMOVED***...props} />) :
      (<Redirect to=***REMOVED******REMOVED*** pathname: "/login" }} />)} />);
  return (
    <div className="App">
      <Router>
        <Route path="/user" component=***REMOVED***ProfilePage} />
        <Route exact path='/login' component=***REMOVED***AuthPage} />
        <Route exact path='/register' component=***REMOVED***RegistrationFrom} />
        <PrivateRoute exact path="/dashboard" component=***REMOVED***Dashboard} />
        <PrivateRoute exact path="/" component=***REMOVED***Dashboard} />
      </Router>
    </div>
  )
}

export default App;
