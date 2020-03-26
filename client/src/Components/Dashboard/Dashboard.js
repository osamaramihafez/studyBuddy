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
            <br></br>
            <FullScreen ref=***REMOVED***ref => ***REMOVED*** this.fullScreenRef = ref }} onFullScreenChange=***REMOVED***this.onFullScreenChange.bind(this)}>
          <div
            className='rq'
            onClick=***REMOVED***this.requestOrExitFullScreen.bind(this)}
          >
            <Button>
            ***REMOVED***!isFullScreen ? 'Go Fullscreen' : 'Exit FullScreen'}
            </Button>
          </div>
        </FullScreen>
        ***REMOVED***/* <FullScreen ref=***REMOVED***ref => ***REMOVED*** this.elFullScreenRef = ref }}>
          <div
            className='el-rq'
            ref=***REMOVED***ref => ***REMOVED*** this.elRef = ref }}
            onClick=***REMOVED***this.requestOrExitFullScreenByElement.bind(this)}
          >
          </div>
        </FullScreen> */}
        <SessionList id="sessionList" ></SessionList>
        </div>
    )
  }
}

export default Dashboard
