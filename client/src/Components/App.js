import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'
import ClearBtn from './ClearDoneTasks'
import LoginForm from './Login/Login'

class App extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      loggedIn: false,
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
          <img src=***REMOVED***logo} className="App-logo" alt="logo" /> 
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
        </header>
        <Fullscreen
          enabled=***REMOVED***this.state.isFull}
          onChange=***REMOVED***isFull => this.setState(***REMOVED***isFull})}>
                    <header className="App-header">
          <img src=***REMOVED***logo} className="App-logo" alt="logo" /> 
          <p>
          <LoginForm loggedIn=***REMOVED***this.state.loggedIn}></LoginForm>
          ***REMOVED***/* <img src=***REMOVED***logo} className="App-logo" alt="logo" /> Instead of image here, it can be the task. */}
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
        </header>
        </Fullscreen>
          <p>POMODORO TIMER</p>
        </header>
      </div>
    )
  }
}

export default App
