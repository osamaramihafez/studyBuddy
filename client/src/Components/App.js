import React from 'react'
import logo from './logo.svg'
import '../App.css'
import Timer from './Timer'
import Fullscreen from "react-full-screen";

//Fullscreen inspired from: https://www.npmjs.com/package/react-full-screen

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      timerMinute: 25,
      isFull:false,
    }
    this.updateTimer = this.updateTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  goFull = () => {
    this.setState({ isFull: true });
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
      timerMinute: 25
    })
  }

  render() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {/* Instead of image here, it can be the task. */}
          <p>
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
            />
          </p>
          POMODORO TIMER.
          <button onClick={this.goFull}>
          Go Fullscreen
        </button>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
        </header>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}>
                    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {/* Instead of image here, it can be the task. */}
          <p>
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimer={this.updateTimer}
              resetTimer={this.resetTimer}
            />
          </p>
          POMODORO TIMER.
          <button onClick={this.goFull}>
          Go Fullscreen
        </button>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          POMODORO TIMER
       </a>*/}
        </header>
          {/* <div className="full-screenable-node">
            This is now in Fullscreen
          </div> */}
        </Fullscreen>
      </div>
    )
  }
}

export default App
