import React, ***REMOVED*** Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navi from "./Components/Navbar/Navbar"

class App extends Component ***REMOVED***
  render () ***REMOVED***
    return (
      <div className="App">
        <Navi/>
        <header className="App-header">
          <img src=***REMOVED***logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
