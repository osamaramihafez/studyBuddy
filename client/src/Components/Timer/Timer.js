import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import Button from 'react-bootstrap/Button'
import { MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import './Timer.css'
import { ThemeProvider } from 'styled-components';

class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      minutes: "25",
      seconds: "00",
      disabled: false,
      sound: true,  //play the sound whenever reset
      break: false 
    }

    this.beep = new UIfx(mp3File);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.formatMinutes = this.formatMinutes.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);
    this.formatSeconds = this.formatSeconds.bind(this);
    this.switchMode = this.switchMode.bind(this);

    this.tick = this.tick.bind(this);
  }

  switchMode() {
    this.setState({
      break: !this.state.break,
    });
    if(this.state.break === false) {
      this.setState({
        minutes: "05"
      });
      return;
    }
    this.setState({
      minutes: "25"
    });
  }

  updateMinutes(e) {
    let value = e.target.value;
    console.log(value);
    if(value <= 0) {
      return;
    }
    if( value.length > 2) {
      return;
    }
    this.setState({minutes: value});

  }
  updateSeconds(e) {
    let value = e.target.value;
    if( value.length >= 2) {
      return;
    }
    if(value <= 0) {
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
      this.stop();
      this.switchMode();
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

  formatMinutes(e) {
    const value = e.target.value;
    if( value.length >= 2) {
      return;
    }
    if(value < 10) {
      this.setState({
        minutes: "0" + value
      })
    }
    return;
  }

  formatSeconds(e) {
    const value = e.target.value;
    if( value.length >= 2) {
      return;
    }
    else if(value < 10) {
      this.setState({
        seconds: "0" + value
      })
      return;
    }
  }

  render() {
    return (
      <section>
          {this.state.break === false ? <h1>ACTIVE</h1> : <h1 className="break">BREAK</h1>}
          <input onBlur={this.formatMinutes} disabled={this.state.disabled} maxLength="2" max="99" className="timer" type="number" value={this.state.minutes} onChange={this.updateMinutes} />
          <p className="colon">:</p>
          <input onBlur={this.formatSeconds} disabled={this.state.disabled} maxLength="2" max="59" className="timer" type="number" value={this.state.seconds} onChange={this.updateSeconds} />
          <br />
          <Button ref="btn" onClick={this.start} disabled={this.state.disabled}>
          <MdPlayArrow />
          </Button>
          <Button onClick={this.stop} disabled={!this.state.disabled}>
            <MdPause />
          </Button>
          <Button onClick={this.reset}>
            <MdRefresh />
          </Button>
          <Button ref="btn" onClick={this.switchMode} disabled={this.state.disabled}>Switch Modes</Button>
      </section>
    )
  }
}
export default Timer
