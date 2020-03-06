import React from 'react'
import Auth from '../../HOC/Auth'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import Dashboard from '../../Components/Dashboard/Dashboard';

const App = () => {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.authenticate() ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/login" }} />)} />);

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
