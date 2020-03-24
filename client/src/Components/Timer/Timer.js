import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import Button from 'react-bootstrap/Button'
import { MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import Countdown from 'react-countdown';
import './Timer.css'

class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      minutes: "25",
      seconds: "00",
      beginning: 0,
      disabled: false,
      sound: true,  //play the sound whenever reset
    }

    this.beep = new UIfx(mp3File);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);
    this.tick = this.tick.bind(this);
  }

  updateMinutes(e) {
    let value = e.target.value;
    if(value <= 0) {
      return;
    }
    if(value < 10) {
      value = "0" + e.target.value
      this.setState({minutes: value});
      return;
    }
    else {
      this.setState({minutes: value});
    }
  }
  updateSeconds(e) {
    let value = e.target.value;
    if(value <= 0) {
      value = "00"
    }
    else if(value < 10) {
      value = "0" + value;
    }
    if(value > 59) {
      this.setState({seconds: 59});
      return;
    }
    this.setState({seconds: value});
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = (this.secondsRemaining - (min * 60));
    this.setState({
      minutes: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {this.setState({
      minutes: "0" + min,
    })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
  }

  stop() {
    clearInterval(this.intervalHandle);
    this.setState({
      disabled: false,
    })
  }

  start() {
    this.setState({
      disabled: true,
      sound: true
    })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60 + Number(this.state.seconds);

  }

  reset() {
    this.stop();
    this.setState({
      seconds: '00',
      minutes: '25',
      sound: true
    });
    this.setState({disabled: false})
  }

  render() {
    return (
      <section>
          <input disabled={this.state.disabled} maxLength="2" max="99" className="timer" type="number" value={this.state.minutes} onChange={this.updateMinutes} />
          <p className="colon">:</p>
          <input disabled={this.state.disabled} maxLength="2" max="59" className="timer" type="number" value={this.state.seconds} onChange={this.updateSeconds} />
          <br />
          <Button ref="btn" onClick={this.start} disabled={this.state.disabled}>
          <MdPlayArrow />
          </Button>
          <Button onClick={this.stop}>
            <MdPause />
          </Button>
          <Button onClick={this.reset}>
            <MdRefresh />
          </Button>
      </section>
    )
  }
}
export default Timer
