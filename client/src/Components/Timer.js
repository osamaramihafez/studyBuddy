import React from 'react'

class Timer extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      seconds: 0,
      beginning: 0,
    }

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    

    this.decrease = this.decrease.bind(this);
  }

  start() ***REMOVED***
    let beginning = setInterval(this.decrease, 1000)

    this.setState(***REMOVED***
        beginning: beginning
    })
  }

  stop()***REMOVED***
      clearInterval(this.state.beginning)
  }

  reset()***REMOVED***
      this.stop();
      this.setState(***REMOVED***
        seconds: 0
      })
  }

  decrease() ***REMOVED***
    switch (this.state.seconds) ***REMOVED***
      case 0:
          if ( this.props.timerMinute === 0 && this.state.seconds === 0 )***REMOVED***
              break;
          }
        this.props.updateTimer();
        this.setState(***REMOVED***
          seconds: 59
        })
        break;
      default:
        this.setState( (prevState) => ***REMOVED***
          return ***REMOVED***
            seconds: prevState.seconds - 1
          }
        })
        break;
    }
  }

  render() ***REMOVED***
    return (
      <section>
        <section className="timer-design">
          <span className="timer">***REMOVED***this.props.timerMinute}</span>
          <span className="timer">:</span>
          <span className="timer">
            ***REMOVED***this.state.seconds === 0
              ? '00'
              : this.state.seconds < 10
              ? '0' + this.state.seconds
              : this.state.seconds}
          </span>
        </section>
        <section>
          <button class="button start" onClick=***REMOVED***this.start}>
            Start
          </button>
          <button class="button stop" onClick=***REMOVED***this.stop}>
            Stop
          </button>
          <button class="button reset" onClick=***REMOVED***this.reset}>
            Reset
          </button>
        </section>
      </section>
    )
  }
}
export default Timer
