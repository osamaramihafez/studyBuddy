import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import Auth from '../../HOC/Auth'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Dashboard from '../../Components/Dashboard/Dashboard';

const App = () => {
 
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.getAuth() ? 
      (<Component {...props} />) : 
      (<Redirect to={{pathname: "/login"}}/>)}/>);

    return (
      <div className="App">
        <Router>
          <Route exact path='/login' component={AuthPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Router>
        </div>
    )
  }

export default App;
