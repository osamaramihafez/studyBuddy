import React from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'

import './App.css'
import Timer from '../../Components/Timer/Timer'
import Break from '../../Components/Break/Break'
import Session from '../../Components/List/Session'
import ClearBtn from '../../Components/ClearButton/ClearDoneTasks'
import SessionList from '../../Components/List/SessionList';

class App extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      loggedIn: false,
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

  getToken() ***REMOVED***
    const cookies = new Cookies();
    const cookie = cookies.get('Authorization');
    return cookie;
  }

  isLoggedIn() ***REMOVED***
    try ***REMOVED***
      const tk = this.getToken();
      const decoded = decode(tk);
      if(decoded.exp < Date.now() / 1000) ***REMOVED***
          return false;
        }
      return true;
    } catch (error) ***REMOVED***
      return false;
    }
  }

  render() ***REMOVED***
    console.log(this.getToken());
    return (
      <div className="App">
            <Timer
              timerMinute=***REMOVED***this.state.timerMinute}
              updateTimer=***REMOVED***this.updateTimer}
              resetTimer=***REMOVED***this.resetTimer}
              countdown=***REMOVED***this.countdown}
              break = ***REMOVED***this.break}
            />
              <ClearBtn/>
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
            <ClearBtn/>
          <button 
            onClick=***REMOVED***this.goFull}>
          Go Fullscreen
        </button>
        </div>
    )
  }
}

export default App
