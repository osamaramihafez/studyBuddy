import React from 'react'
import Auth from '../../HOC/Auth'
import ***REMOVED*** BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage'
import RegistrationFrom from '../../Components/Register/Register.js'
import Dashboard from '../../Components/Dashboard/Dashboard';
import ProfilePage from '../../Components/ProfilePage/ProfilePage';
import Gateway from '../Gateway/Gateway';
import SocketAuth from '../../GroupStudy/Auth/Auth';
import GroupStudy from '../../GroupStudy/GroupStudy/GroupStudy';

const App = () => ***REMOVED***

  const PrivateRoute = (***REMOVED*** component: Component, ...rest }) => (
    <Route ***REMOVED***...rest} render=***REMOVED***props => Auth.authenticate() ?
      (<Component ***REMOVED***...props} />) :
      (<Redirect to=***REMOVED******REMOVED*** pathname: "/" }} />)} />);
  return (
    <div className="App">
      <Router>
        <PrivateRoute path="/user" component=***REMOVED***ProfilePage} />
        <Route exact path='/login' component=***REMOVED***AuthPage} />
        <Route exact path='/' component=***REMOVED***AuthPage} />
      
        <Route exact path='/register' component=***REMOVED***RegistrationFrom} />
        <PrivateRoute exact path="/dashboard/solo" component=***REMOVED***Dashboard} />
        <PrivateRoute exact path="/dashboard" component=***REMOVED***Gateway} />
        <PrivateRoute exact path="/dashboard/group/auth" component=***REMOVED***SocketAuth} />
        <PrivateRoute exact path="/dashboard/group/study" component=***REMOVED***GroupStudy} />
      </Router>
    </div>
  )
}

export default App;
