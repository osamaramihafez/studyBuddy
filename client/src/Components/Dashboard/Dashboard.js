import React from 'react'
import Cookies from 'universal-cookie'
import decode from 'jwt-decode'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'
import Timer from '../Timer/Timer'
import Break from '../Break/Break'
import Session from '../List/Session'
import ClearBtn from '../ClearButton/ClearDoneTasks'
import Button from 'react-bootstrap/Button'
import SessionList from '../List/SessionList';
import LogoutButton from '../LogoutButton/LogoutButton'
import CalendarPage from '../CalendarPage/CalendarPage'


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
  
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.isTimerRunning = this.isTimerRunning.bind(this);
  }

  isTimerRunning(timerRunning) {
    this.setState({
      timerRunning: timerRunning
    })
  }


  updateTimer() {
    this.setState( (prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
    
  }

  resetTimer() {
    this.setState({
      timerMinute: 25,
      break: 5,
      session: 25,
      flipper:true,
    })
  }

  changeBreak(breaktwo) {
    
    if (this.counter === true){
      this.setState({
        break: breaktwo
      })
    }
    else{
      this.setState({
        counter: false,
        flipper: false,
        break: breaktwo,
        timerMinute: breaktwo
      })
    }
}

changeSession(newsession) {
  
  if (this.counter === true){
    this.setState({
      session: newsession
    })
  }
  else{
    this.setState({
      counter: false,
      flipper: true,
      session: newsession,
      timerMinute: newsession
    })
  }
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
    console.log(this.getToken());
    return (
      <div className="App">
        <Navbar />
            <Timer />
              <ClearBtn/>
              <LogoutButton></LogoutButton>
            <section className="interval-container">

            </section>
            {/* <ClearBtn/> */}
          <Button id='fullscreen'
            onClick={this.goFull}>
          Go Fullscreen
        </Button>
        <SessionList id="sessionList" ></SessionList>
        </div>
    )
  }
}

export default Dashboard
