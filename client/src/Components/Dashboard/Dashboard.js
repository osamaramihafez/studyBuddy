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
         <h4> { this.state.flipper === true ? "Session": "Break" } </h4>
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
              break = {this.break}
              timerRunning = {this.state.timerRunning}
            />
              <ClearBtn/>
              <LogoutButton></LogoutButton>
            <section className="interval-container">
              <Break
              changeBreak = {this.changeBreak}
              break = {this.state.break}
              />
              <Session
              changeSession = {this.changeSession}
              session = {this.state.session}
              />
            </section>
            {/* <ClearBtn/> */}
            <br></br>
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