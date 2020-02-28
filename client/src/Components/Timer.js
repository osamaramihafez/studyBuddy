import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'

class Timer extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      seconds: 0,
      beginning: 0,
      disabled : false,
      sound: true,  //play the sound whenever reset
    }

    this.beep =  new UIfx(mp3File);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);

    this.decrease = this.decrease.bind(this);
  }

  start() ***REMOVED***
    if (this.state.disabled) ***REMOVED***
        return;
    }

    if (this.state.sound) ***REMOVED***
      this.beep.play();
    }

    let beginning = setInterval(this.decrease, 1000)

    this.setState(***REMOVED***
        beginning: beginning,
        disabled: true,
        sound: false
    })
    this.props.countdown(true);
  }

  stop()***REMOVED***
      clearInterval(this.state.beginning)
      this.setState(***REMOVED***
        disabled: false,
    })
    this.props.countdown(false);
  }

  reset()***REMOVED***
      this.stop();
      this.props.resetTimer()
      this.props.countdown(false);
      this.setState(***REMOVED***
        seconds: 0,
        sound: true
      })
  }

  decrease() ***REMOVED***
    switch (this.state.seconds) ***REMOVED***
      case 0:
          if ( this.props.timerMinute === 0 && this.state.seconds === 0 )***REMOVED***
           
              this.beep.play();
              this.props.timerMinute = this.props.break;
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
        <section>
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
          <button ref="btn" className="button start" onClick=***REMOVED***this.start}>
            Start
          </button>
          <button className="button stop" onClick=***REMOVED***this.stop}>
            Stop
          </button>
          <button className="button reset" onClick=***REMOVED***this.reset}>
            Reset
          </button>
        </section>
      </section>
    )
  }
}
export default Timer
