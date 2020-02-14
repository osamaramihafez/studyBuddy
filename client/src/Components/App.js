import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'

class App extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      timerMinute: 25,
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  updateTimer() ***REMOVED***
    this.setState( (prevState) => ***REMOVED***
      return ***REMOVED***
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  resetTimer() ***REMOVED***
    this.setState(***REMOVED***
      timerMinute: 25
    })
  }

  render() ***REMOVED***
    return (
      <div className="App">
        <header className="App-header">
          <img src=***REMOVED***logo} className="App-logo" alt="logo" /> ***REMOVED***/* Instead of image here, it can be the task. */}
          <p>
            <Timer
              timerMinute=***REMOVED***this.state.timerMinute}
              updateTimer=***REMOVED***this.updateTimer}
              resetTimer=***REMOVED***this.resetTimer}
            />
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
      </div>
    )
  }
}

export default App
