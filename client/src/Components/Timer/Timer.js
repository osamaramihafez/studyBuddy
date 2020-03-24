import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import Button from 'react-bootstrap/Button'
import ***REMOVED*** MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import Countdown from 'react-countdown';
import './Timer.css'

class Timer extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
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

  updateMinutes(e) ***REMOVED***
    let value = e.target.value;
    if(value <= 0) ***REMOVED***
      return;
    }
    if(value < 10) ***REMOVED***
      value = "0" + e.target.value
      this.setState(***REMOVED***minutes: value***REMOVED***
      return;
    }
    else ***REMOVED***
      this.setState(***REMOVED***minutes: value***REMOVED***
    }
  }
  updateSeconds(e) ***REMOVED***
    let value = e.target.value;
    if(value <= 0) ***REMOVED***
      value = "00"
    }
    else if(value < 10) ***REMOVED***
      value = "0" + value;
    }
    if(value > 59) ***REMOVED***
      this.setState(***REMOVED***seconds: 59***REMOVED***
      return;
    }
    this.setState(***REMOVED***seconds: value***REMOVED***
  }

  tick() ***REMOVED***
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = (this.secondsRemaining - (min * 60));
    this.setState(***REMOVED***
      minutes: min,
      seconds: sec
    })
    if (sec < 10) ***REMOVED***
      this.setState(***REMOVED***
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) ***REMOVED***this.setState(***REMOVED***
      minutes: "0" + min,
    })
    }
    if (min === 0 & sec === 0) ***REMOVED***
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
  }

  stop() ***REMOVED***
    clearInterval(this.intervalHandle);
    this.setState(***REMOVED***
      disabled: false,
    })
  }

  start() ***REMOVED***
    this.setState(***REMOVED***
      disabled: true,
      sound: true
    })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60 + Number(this.state.seconds);

  }

  reset() ***REMOVED***
    this.stop();
    this.setState(***REMOVED***
      seconds: '00',
      minutes: '25',
      sound: true
    ***REMOVED***
    this.setState(***REMOVED***disabled: false})
  }

  render() ***REMOVED***
    return (
      <section>
          <input disabled=***REMOVED***this.state.disabled} maxLength="2" max="99" className="timer" type="number" value=***REMOVED***this.state.minutes} onChange=***REMOVED***this.updateMinutes} />
          <p className="colon">:</p>
          <input disabled=***REMOVED***this.state.disabled} maxLength="2" max="59" className="timer" type="number" value=***REMOVED***this.state.seconds} onChange=***REMOVED***this.updateSeconds} />
          <br />
          <Button ref="btn" onClick=***REMOVED***this.start} disabled=***REMOVED***this.state.disabled}>
          <MdPlayArrow />
          </Button>
          <Button onClick=***REMOVED***this.stop}>
            <MdPause />
          </Button>
          <Button onClick=***REMOVED***this.reset}>
            <MdRefresh />
          </Button>
      </section>
    )
  }
}
export default Timer
