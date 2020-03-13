import React from 'react'
import logo from './Components/logo.svg'
import './App.css'
import Timer from './Components/Timer/Timer'
import Break from './Components/Break/Break'
import Session from './Components/List/Session'
import ClearBtn from './Components/ClearButton/ClearDoneTasks'
import LoginForm from './Components/Login/Login'
import SessionList from './Components/List/SessionList';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      //isSession: true,
      timerMinute: 25,
      break: 5,
      session: 25,
      flipper: true,
      counter: false
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.countdown = this.countdown.bind(this);
  }


  updateTimer() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })

  }

  countdown(boolean) {
    this.setState({
      counter: boolean
    })
  }
  resetTimer() {
    this.setState({
      timerMinute: 25, //NEEDS TO BE CHANGED so it isn't hardcoded
      break: 5,
      session: 25,
    })
  }

  changeBreak(breaktwo) {
    if (this.counter === true) {
      this.setState({
        break: breaktwo
      })
    }
    else {
      this.setState({
        counter: false,
        flipper: false,
        break: breaktwo,
        timerMinute: breaktwo
      })
    }
  }

  changeSession(newsession) {

    if (this.counter === true) {
      this.setState({
        session: newsession
      })
    }
    else {
      this.setState({
        counter: false,
        flipper: true,
        session: newsession,
        timerMinute: newsession
      })
    }
  }


  render() {
    return (
      <div className="App">
        <LoginForm loggedIn={this.state.loggedIn}></LoginForm>
        {/* <img src={logo} className="App-logo" alt="logo" /> Instead of image here, it can be the task. */}
        SESSION TIMER
            <Timer
          timerMinute={this.state.timerMinute}
          updateTimer={this.updateTimer}
          resetTimer={this.resetTimer}
          countdown={this.countdown}
          break={this.break}
        />
        <ClearBtn />
        <section className="interval-container">
          <Break
            changeBreak={this.changeBreak}
            break={this.state.break}
          />
          <Session
            changeSession={this.changeSession}
            session={this.state.session}
          />
        </section>
        <section className="session-container">
          <SessionList />
        </section>
        <ClearBtn />
        <button
          onClick={this.goFull}>
          Go Fullscreen
        </button>
      </div>
    )
  }
}

export default App;