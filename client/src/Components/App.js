import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Timer from './Timer';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      timerMinute : 25,
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Want to see the timer here. {/* Want to put the timer here on the html. */}
          <h2>
          <Timer timerMinute={this.state.timerMinute}/>
          </h2>
        </p>
        POMODORO TIMER.
       {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
      </header>
    </div>
  );
}
}

export default App;
