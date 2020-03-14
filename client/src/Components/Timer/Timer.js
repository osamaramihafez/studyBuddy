import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import Button from 'react-bootstrap/Button'


class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      seconds: 0,
      beginning: 0,
      disabled: false,
      sound: true,  //play the sound whenever reset
    }

    this.beep = new UIfx(mp3File);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);

    this.decrease = this.decrease.bind(this);
  }

  start() {
    if (this.state.disabled) {
      return;
    }

    if (this.state.sound) {
      this.beep.play();
    }


    let beginning = setInterval(this.decrease, 1000)

    this.setState({
      beginning: beginning,
      disabled: true,
      sound: false,
    })
  }

  stop() {
    clearInterval(this.state.beginning)
    this.setState({
      disabled: false,
    })
  }

  reset() {
    this.stop();
    this.props.resetTimer();
    this.setState({
      seconds: 0,
      sound: true
    })
  }

  decrease() {
    switch (this.state.seconds) {
      case 0:
        if (this.props.timerMinute === 0 && this.state.seconds === 0) {
          this.beep.play();
          this.setState({ timerMinute: this.state.break });
          break;
        }

        this.props.updateTimer();
        this.setState({
          seconds: 59
        })
        break;
      default:
        this.setState((prevState) => {
          return {
            seconds: prevState.seconds - 1
          }
        })
        break;
    }
  }

  render() {
    return (
      <section>
        <section>
          <span className="timer">{this.props.timerMinute}</span>
          <span className="timer">:</span>
          <span className="timer">
            {this.state.seconds === 0
              ? '00'
              : this.state.seconds < 10
                ? '0' + this.state.seconds
                : this.state.seconds}
          </span>
        </section>
        <section>

          <Button ref="btn" className="button start" onClick={this.start}>
            Start
          </Button>
          <Button className="button stop" onClick={this.stop}>
            Stop
          </Button>
          <Button className="button reset" onClick={this.reset}>
            Reset
          </Button>
        </section>
      </section>
    )
  }
}
export default Timer
