import React from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css'
import Timer from '../Timer/Timer'
import SessionList from '../List/SessionList';
import Button from '@material-ui/core/Button';
import FullScreen from 'react-request-fullscreen'
import LogoutButton from '../LogoutButton/LogoutButton'

class Dashboard extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super()
    this.props = props
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
    this.backtoDash = this.backtoDash.bind(this);
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

  backtoDash() ***REMOVED***
    this.props.history.push('/dashboard')
  }

  render() ***REMOVED***
    const ***REMOVED*** isFullScreen } = this.state
    return (
      <div className="App">
        ***REMOVED***/* <Navbar /> */}
        <div className="back-controls">
          <Button variant="contained" onClick=***REMOVED***this.backtoDash} >Go back</Button>
          <LogoutButton></LogoutButton>
        </div>
        <div className="timer-backdrop">
          <Timer />      
              <br></br>
              <FullScreen ref=***REMOVED***ref => ***REMOVED*** this.fullScreenRef = ref }} onFullScreenChange=***REMOVED***this.onFullScreenChange.bind(this)}>
                  <div className='rq'>
                    <Button onClick=***REMOVED***this.requestOrExitFullScreen.bind(this)} variant="contained">
                    ***REMOVED***!isFullScreen ? 'Go Fullscreen' : 'Exit FullScreen' }
                    </Button>
                  </div>
          </FullScreen>
        </div>
        <SessionList id="sessionList" ></SessionList>
        </div>
    )
  }
}

export default Dashboard
