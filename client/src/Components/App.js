import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'
import Break from './Break'
import Session from './Session'

class App extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      timerMinute: 25,
      break: 5,
      session: 25,
      flipper: true,
      counter : false
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.countdown = this.countdown.bind(this);
  }


  updateTimer() ***REMOVED***
    this.setState( (prevState) => ***REMOVED***
      return ***REMOVED***
        timerMinute: prevState.timerMinute - 1
      }
    })
    
  }

  countdown(boolean) ***REMOVED***
    this.setState(***REMOVED***
      counter: boolean
    })
  }

  resetTimer() ***REMOVED***
    this.setState(***REMOVED***
      timerMinute: 25,
      break: 5,
      session: 25,
    })
  }
  
  changeBreak(breaktwo) ***REMOVED***

      if (this.counter === true)***REMOVED***
        this.setState(***REMOVED***
          break: breaktwo
        })
      }
      else***REMOVED***
        this.setState(***REMOVED***
          counter: false,
          flipper: false,
          break: breaktwo,
          timerMinute: breaktwo
        })
      }
    
     
    
    
  }

  changeSession(newsession) ***REMOVED***
    
    if (this.counter === true)***REMOVED***
      this.setState(***REMOVED***
        session: newsession
      })
    }
    else***REMOVED***
      this.setState(***REMOVED***
        counter: false,
        flipper: true,
        session: newsession,
        timerMinute: newsession
      })
    }
  }


  render() ***REMOVED***
    return (
      <div className="App">
        <header className="App-header">
          <img src=***REMOVED***logo} className="App-logo" alt="logo" /> ***REMOVED***/* Instead of image here, it can be the task. */}
          <h4> ***REMOVED*** this.state.flipper === true ? "Session": "Break" } </h4>
          <p>
            <Timer
              timerMinute=***REMOVED***this.state.timerMinute}
              updateTimer=***REMOVED***this.updateTimer}
              resetTimer=***REMOVED***this.resetTimer}
              countdown=***REMOVED***this.countdown}
              break = ***REMOVED***this.break}
            />
            <section className="interval-container">
            <Break
            changeBreak = ***REMOVED***this.changeBreak}
            break = ***REMOVED***this.state.break}
            />
            <Session
            changeSession = ***REMOVED***this.changeSession}
            session = ***REMOVED***this.state.session}
            />
            </section>
          </p>
          POMODORO TIMER.
        </header>
      </div>
    )
  }
}

export default App
