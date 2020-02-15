import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navi from "./Components/Popup/Popup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navi />
        </header>
      </div>
    );
  }
}

export default App;
