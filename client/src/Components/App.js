import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'
import Break from './Break'
import Session from './Session'
import ClearBtn from './ClearDoneTasks'
import LoginForm from './Login/Login'
import SessionList from './SessionList';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
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


  updateTimer() {
    this.setState( (prevState) => {
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
      timerMinute: 25,
      break: 5,
      session: 25,
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
            />
            <ClearBtn/>
          </p>
          POMODORO TIMER.
          <button onClick={this.goFull}>
          Go Fullscreen
        </button>
        </header>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}>
                    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>
          <LoginForm loggedIn={this.state.loggedIn}></LoginForm>
          {/* <img src={logo} className="App-logo" alt="logo" /> Instead of image here, it can be the task. */}
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
              countdown={this.countdown}
              break = {this.break}
            />
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
          </p>
          POMODORO TIMER.
          </p>
            <ClearBtn/>
          <button onClick={this.goFull}>
          Go Fullscreen
        </button>
        </header>
        </Fullscreen>
          <p>POMODORO TIMER</p>
        </header>
      </div>
    )
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>
            <Timer timerMinute={this.state.timerMinute}/>
          </h2>
        </p>
        <p>POMODORO TIMER. </p>
      </header>
    </div>
  );
}
}

export default App
