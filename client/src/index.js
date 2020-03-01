import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Containers/App/App';
import * as serviceWorker from './serviceWorker';
import ***REMOVED*** Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import AuthPage from './Containers/AuthPage/AuthPage';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component=***REMOVED***AuthPage} />
            <Route exact path="/app" component=***REMOVED***App} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
