import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import ***REMOVED***Button} from 'react-bootstrap'
import ***REMOVED*** MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import './Timer.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Timer extends React.Component ***REMOVED***
  constructor() ***REMOVED***
    super()

    this.state = ***REMOVED***
      minutes: "25",
      seconds: "00",
      disabled: false,
      sound: true,  //play the sound whenever reset
      break: false,
      continious: false
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
    this.switchContinue = this.switchContinue.bind(this);

    this.tick = this.tick.bind(this);
  }

  switchMode() ***REMOVED***
    this.setState(***REMOVED***
      break: !this.state.break,
    ***REMOVED***
    if(this.state.break) ***REMOVED***
      this.setState(***REMOVED***
        minutes: "05"
      ***REMOVED***
      return;
    }
    this.setState(***REMOVED***
      minutes: "25"
    ***REMOVED***
  }

  updateMinutes(e) ***REMOVED***
    let value = e.target.value;
    if(value <= 0) ***REMOVED***
      return;
    }
    if( value.length > 2) ***REMOVED***
      return;
    }
    this.setState(***REMOVED***minutes: value***REMOVED***

  }
  updateSeconds(e) ***REMOVED***
    let value = e.target.value;
    if( value.length >= 2) ***REMOVED***
      return;
    }
    if(value <= 0) ***REMOVED***
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
      this.stop();
      this.switchMode();
      if(this.state.continious) ***REMOVED***
        this.start()
      }
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
      sound: true,
      break: false
    ***REMOVED***
    this.setState(***REMOVED***disabled: false})
  }

  formatMinutes(e) ***REMOVED***
    const value = e.target.value;
    if( value.length >= 2) ***REMOVED***
      return;
    }
    if(value < 10) ***REMOVED***
      this.setState(***REMOVED***
        minutes: "0" + value
      })
    }
    return;
  }

  formatSeconds(e) ***REMOVED***
    const value = e.target.value;
    if( value.length >= 2) ***REMOVED***
      return;
    }
    else if(value < 10) ***REMOVED***
      this.setState(***REMOVED***
        seconds: "0" + value
      })
      return;
    }
  }

  switchContinue() ***REMOVED***
    this.setState(***REMOVED***
      continious: !this.state.continious
    })
  }

  render() ***REMOVED***
    return (
      <section>
          ***REMOVED***this.state.break === false ? <h1>ACTIVE</h1> : <h1 className="break">BREAK</h1>}
          <input onBlur=***REMOVED***this.formatMinutes} disabled=***REMOVED***this.state.disabled} maxLength="2" max="99" className="timer" type="number" value=***REMOVED***this.state.minutes} onChange=***REMOVED***this.updateMinutes} />
          <p className="colon">:</p>
          <input onBlur=***REMOVED***this.formatSeconds} disabled=***REMOVED***this.state.disabled} maxLength="2" max="59" className="timer" type="number" value=***REMOVED***this.state.seconds} onChange=***REMOVED***this.updateSeconds} />
          <br />
          <Button ref="btn" onClick=***REMOVED***this.start} disabled=***REMOVED***this.state.disabled}>
          <MdPlayArrow />
          </Button>
          <Button onClick=***REMOVED***this.stop} disabled=***REMOVED***!this.state.disabled}>
            <MdPause />
          </Button>
          <Button onClick=***REMOVED***this.reset}>
            <MdRefresh />
          </Button>
    <Button ref="btn" onClick=***REMOVED***this.switchMode} disabled=***REMOVED***this.state.disabled}>Switch Modes ***REMOVED***this.state.br}</Button>
    <br />
    <FormControlLabel
        control=***REMOVED***
          <Switch
            checked=***REMOVED***this.state.continious}
            onChange=***REMOVED***this.switchContinue}
            name="checkedB"
            color="primary"
          />
        }
        label=***REMOVED***<p className="Label">Continuous Mode ***REMOVED***this.state.continious === true ? "Enabled": "Disabled"}</p>}
      />
      </section>
    )
  }
}
export default Timer
