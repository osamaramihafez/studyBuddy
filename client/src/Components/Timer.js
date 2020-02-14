import React from 'react'

class Timer extends React.Component {
  constructor() {
    super()

    this.state = {
      seconds: 0,
      beginning: 0,
      disabled : false
    }

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    

    this.decrease = this.decrease.bind(this);
  }

  start() {
    if (this.state.disabled) {
        return;
    }
    let beginning = setInterval(this.decrease, 1000)

    this.setState({
        beginning: beginning,
        disabled: true
    })
  }

  stop(){
      clearInterval(this.state.beginning)
      this.setState({
        disabled: false
    })
  }

  reset(){
      this.stop();
      this.props.resetTimer()
      this.setState({
        seconds: 0
      })
  }

  decrease() {
    switch (this.state.seconds) {
      case 0:
          if ( this.props.timerMinute === 0 && this.state.seconds === 0 ){
              break;
          }
        this.props.updateTimer();
        this.setState({
          seconds: 59
        })
        break;
      default:
        this.setState( (prevState) => {
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
        <section className="timer-design">
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
          <button ref="btn" class="button start" onClick={this.start}>
            Start
          </button>
          <button class="button stop" onClick={this.stop}>
            Stop
          </button>
          <button class="button reset" onClick={this.reset}>
            Reset
          </button>
        </section>
      </section>
    )
  }
}
export default Timer
