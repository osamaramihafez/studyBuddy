import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'
import Fullscreen from "react-full-screen";
import ClearBtn from './ClearDoneTasks'

class App extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      timerMinute: 25,
      isFull:false,
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  goFull = () => ***REMOVED***
    this.setState(***REMOVED*** isFull: true ***REMOVED***
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
            <ClearBtn/>
          </p>
          POMODORO TIMER.
          <button onClick=***REMOVED***this.goFull}>
          Go Fullscreen
        </button>

          ***REMOVED***/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
        </header>
        <Fullscreen
          enabled=***REMOVED***this.state.isFull}
          onChange=***REMOVED***isFull => this.setState(***REMOVED***isFull})}>
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
          <button onClick=***REMOVED***this.goFull}>
          Go Fullscreen
        </button>

          ***REMOVED***/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
        </header>
          ***REMOVED***/* <div className="full-screenable-node">
            This is now in Fullscreen
          </div> */}
        </Fullscreen>
      </div>
    )
  }
}

export default App
