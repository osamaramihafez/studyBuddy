import React from 'react'
import Auth from '../../HOC/Auth'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage'
import RegistrationFrom from '../../Components/Register/Register.js'
import Dashboard from '../../Components/Dashboard/Dashboard';
import ProfilePage from '../../Components/ProfilePage/ProfilePage';
const App = () => {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => Auth.authenticate() ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/login" }} />)} />);
  return (
    <div className="App">
      <Router>
        <div className="container">
          <br/>
          <Route path="/user" component={ProfilePage} />
          {/* <Route path="/user" component={CalendarPage} /> */}
        </div>
        <Route exact path='/login' component={AuthPage} />
        <Route exact path='/register' component={RegistrationFrom} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Router>
    </div>
  )
}

export default App;
