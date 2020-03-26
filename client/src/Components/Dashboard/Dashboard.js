import React from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
import FullScreen, { fullScreenSupported } from 'react-request-fullscreen'


class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
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
  onFullScreenChange (isFullScreen) {
    this.setState({
      isFullScreen
    })
  }
  requestOrExitFullScreen () {
    this.fullScreenRef.fullScreen()
  }
 
  requestOrExitFullScreenByElement () {
    this.elFullScreenRef.fullScreen(this.elRef)
  }

  getToken() {
    const cookies = new Cookies();
    const cookie = cookies.get('Authorization');
    return cookie;
  }

  isLoggedIn() {
    try {
      const tk = this.getToken();
      const decoded = decode(tk);
      if(decoded.exp < Date.now() / 1000) {
          this.setState({loggedIn: false})
        }
        this.setState({loggedIn: true})
      } catch (error) {
        this.setState({loggedIn: false})
      }
  }

  render() {
    const { isFullScreen } = this.state
    return (
      <div className="App">
        <Navbar />
        <Timer />      
         <ClearBtn/>
         <LogoutButton></LogoutButton>
            <br></br>
            <FullScreen ref={ref => { this.fullScreenRef = ref }} onFullScreenChange={this.onFullScreenChange.bind(this)}>
          <div
            className='rq'
            onClick={this.requestOrExitFullScreen.bind(this)}
          >
            <Button>
            {!isFullScreen ? 'Go Fullscreen' : 'Exit FullScreen'}
            </Button>
          </div>
        </FullScreen>
        {/* <FullScreen ref={ref => { this.elFullScreenRef = ref }}>
          <div
            className='el-rq'
            ref={ref => { this.elRef = ref }}
            onClick={this.requestOrExitFullScreenByElement.bind(this)}
          >
          </div>
        </FullScreen> */}
        <SessionList id="sessionList" ></SessionList>
        </div>
    )
  }
}

export default Dashboard
