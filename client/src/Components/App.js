import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      timerMinute: 25,
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  updateTimer() {
    this.setState( (prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  isLoggedIn() {
    
  }

  resetTimer() {
    this.setState({
      timerMinute: 25
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> Instead of image here, it can be the task. */}
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
            />
          <p>POMODORO TIMER</p>
        </header>
      </div>
    )
  }
}

export default App
