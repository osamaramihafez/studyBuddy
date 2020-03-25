import React from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import "bootstrap/dist/css/bootstrap.min.css";
import ***REMOVED*** BrowserRouter as Router, Route} from "react-router-dom";
import './Dashboard.css'
import Timer from '../Timer/Timer'
import Break from '../Break/Break'
import Session from '../List/Session'
import ClearBtn from '../ClearButton/ClearDoneTasks'
import Button from 'react-bootstrap/Button'
import SessionList from '../List/SessionList';
import CalendarPage from '../CalendarPage/CalendarPage'
import LogoutButton from '../LogoutButton/LogoutButton';
import Navbar from '../Navbar/Navbar'
import FullScreen, ***REMOVED*** fullScreenSupported } from 'react-request-fullscreen'


class Dashboard extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      loggedIn: false,
      timerRunning: false,
      timerMinute: 25,
      break: 5,
      session: 25,
      counter : false,
      flipper: true,
      FullScreen: false,
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.isTimerRunning = this.isTimerRunning.bind(this);
  }
  onFullScreenChange (isFullScreen) ***REMOVED***
    this.setState(***REMOVED***
      isFullScreen
    })
  }
  requestOrExitFullScreen () ***REMOVED***
    this.fullScreenRef.fullScreen()
  }
 
  requestOrExitFullScreenByElement () ***REMOVED***
    this.elFullScreenRef.fullScreen(this.elRef)
  }
 

  isTimerRunning(timerRunning) ***REMOVED***
    this.setState(***REMOVED***
      timerRunning: timerRunning
    })
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
      timerMinute: 25,
      break: 5,
      session: 25,
      flipper:true,
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
          this.setState(***REMOVED***loggedIn: false})
        }
        this.setState(***REMOVED***loggedIn: true})
      } catch (error) ***REMOVED***
        this.setState(***REMOVED***loggedIn: false})
      }
  }

  render() ***REMOVED***
    const ***REMOVED*** isFullScreen } = this.state
    return (
      <div className="App">
        <Navbar />
        <Timer />      
         <ClearBtn/>
         <LogoutButton></LogoutButton>
          <Button id='fullscreen'
            onClick=***REMOVED***this.goFull}>
          Go Fullscreen
        </Button>
            <br></br>
            <FullScreen ref=***REMOVED***ref => ***REMOVED*** this.fullScreenRef = ref }} onFullScreenChange=***REMOVED***this.onFullScreenChange.bind(this)}>
          <div
            className='rq'
            onClick=***REMOVED***this.requestOrExitFullScreen.bind(this)}
          >
            <Button>
            ***REMOVED***!isFullScreen ? 'Fullscreen' : 'Exit FullScreen'}
            </Button>
          </div>
        </FullScreen>
        <FullScreen ref=***REMOVED***ref => ***REMOVED*** this.elFullScreenRef = ref }}>
          <div
            className='el-rq'
            ref=***REMOVED***ref => ***REMOVED*** this.elRef = ref }}
            onClick=***REMOVED***this.requestOrExitFullScreenByElement.bind(this)}
          >
          </div>
        </FullScreen>
        <SessionList id="sessionList" ></SessionList>
        </div>
    )
  }
}

export default Dashboard
