import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Timer from './Timer';
import SessionList from './SessionList';


class App extends React.Component ***REMOVED***
  constructor()***REMOVED***
    super();

    this.state = ***REMOVED***
      timerMinute : 25,
    }
  }
  render()***REMOVED***
  return (
    <div className="App">
      <header className="App-header">
        <img src=***REMOVED***logo} className="App-logo" alt="logo" />
        <p>
          Want to see the timer here. ***REMOVED***/* Want to put the timer here on the html. */}
          <h2>
          <Timer timerMinute=***REMOVED***this.state.timerMinute}/>
          </h2>
        </p>
        POMODORO TIMER.
       ***REMOVED***/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
      </header>
      <SessionList />
    </div>
  );
}
}

export default App;
