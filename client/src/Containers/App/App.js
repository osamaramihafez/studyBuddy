import React, ***REMOVED***useState} from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import Auth from '../../HOC/Auth'
import ***REMOVED*** BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Dashboard from '../../Components/Dashboard/Dashboard';

const App = () => ***REMOVED***
 
  const PrivateRoute = (***REMOVED*** component: Component, ...rest }) => (
    <Route ***REMOVED***...rest} render=***REMOVED***props => Auth.getAuth() ? 
      (<Component ***REMOVED***...props} />) : 
      (<Redirect to=***REMOVED******REMOVED***pathname: "/login"}}/>)}/>);

    return (
      <div className="App">
        <Router>
          <Route exact path='/login' component=***REMOVED***AuthPage} />
          <PrivateRoute exact path="/dashboard" component=***REMOVED***Dashboard} />
        </Router>
        </div>
    )
  }

export default App;
