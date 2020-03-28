import React from 'react'
import UIfx from 'uifx'
import mp3File from './beep.mp3'
import ***REMOVED***Button} from 'react-bootstrap'
import ***REMOVED*** MdPlayArrow, MdPause, MdRefresh } from 'react-icons/md';
import './Timer.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Notification from '../../Components/Notification/index'

class Timer extends React.Component ***REMOVED***
  constructor(props) ***REMOVED***
    super()
    this.props = props;
    this.state = ***REMOVED***
      minutes: "25",
      seconds: "00",
      disabled: false,
      sound: true,  //play the sound whenever reset
      break: false,
      continious: false
    }

    this.socket = this.props.socket

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
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickPause = this.handleClickPause.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleSwitchModes = this.handleSwitchModes.bind(this);
    this.handleSwitchContinue = this.handleSwitchContinue.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() ***REMOVED***
    this.socket.on('play', (id) => ***REMOVED***
      if(id === this.socket.id) ***REMOVED***
      } else ***REMOVED***
        this.start();
      }
    ***REMOVED***
    this.socket.on('pause', (id) => ***REMOVED***
      if(id === this.socket.id) ***REMOVED***
      } else ***REMOVED***
        this.stop();
      }
    ***REMOVED***
    this.socket.on('reset', (id) => ***REMOVED***
      if(id === this.socket.id) ***REMOVED***
      } else ***REMOVED***
        this.reset();
      }
    ***REMOVED***
    this.socket.on('switchModes', (id) => ***REMOVED***
      if(id === this.socket.id) ***REMOVED***
      } else ***REMOVED***
        console.log("Test")
        this.switchMode();
      }
    ***REMOVED***
    this.socket.on('switchContinue', (id) => ***REMOVED***
      if(id === this.socket.id) ***REMOVED***
      } else ***REMOVED***
        console.log("Test")
        this.switchContinue();
      }
    ***REMOVED***
  }

  switchMode() ***REMOVED***
    // this.setState(***REMOVED***
    //   break: !this.state.break,
    // ***REMOVED***
    // if(!this.state.break) ***REMOVED***
    //   this.setState(***REMOVED***
    //     minutes: "05"
    //   ***REMOVED***
    //   return;
    // }
    // else this.setState(***REMOVED***
    //   minutes: "25"
    // ***REMOVED***
    if(this.state.break === true) ***REMOVED***
      this.setState(***REMOVED***
          break: !this.state.break,
        ***REMOVED***
        this.setState(***REMOVED***
        minutes: "25"
        ***REMOVED***
        return;
    }
    else ***REMOVED***
      this.setState(***REMOVED***
        break: !this.state.break,
      ***REMOVED***
      this.setState(***REMOVED***
      minutes: "05"
      ***REMOVED***
      return;
    }
  }

  updateMinutes(e) ***REMOVED***
    let value = e.target.value;
    if(value < 0) ***REMOVED***
      return;
    }
    if( value.length > 2) ***REMOVED***
      return;
    }
    this.setState(***REMOVED***minutes: value***REMOVED***

  }
  updateSeconds(e) ***REMOVED***
    let value = e.target.value;
    console.log(value);
    if(value < 0) ***REMOVED***
      return;
    }
    if( value.length > 2) ***REMOVED***
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
      if (this.state.continious) ***REMOVED***this.notification.showNotification('Timer Complete. New timer starting!');}
      else ***REMOVED***this.notification.showNotification('Timer Complete. Start your new timer!');}
      
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

  handleClickPlay() ***REMOVED***
    this.socket.emit('sendPlay');
    this.start();
  }

  handleClickPause() ***REMOVED***
    this.socket.emit('sendPause');
    this.stop();
  }

  handleClickReset() ***REMOVED***
    this.socket.emit('sendReset');
    this.reset();
  }

  handleSwitchModes() ***REMOVED***
    this.socket.emit('sendSwitchModes');
    this.switchMode();
  }

  handleSwitchContinue() ***REMOVED***
    this.socket.emit('sendSwitchContinue');
    this.switchContinue();
  }

  start() ***REMOVED***
    this.setState(***REMOVED***
      disabled: true,
      sound: true
    })
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60 + Number(this.state.seconds);
    // this.socket.emit('sendPlay');
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
      
      <section className="timer-backdrop">
          ***REMOVED***this.state.break === false ? <h1>ACTIVE</h1> : <h1 className="break">BREAK</h1>}
          <input onBlur=***REMOVED***this.formatMinutes} disabled maxLength="2" max="99" className="timer" type="number" value=***REMOVED***this.state.minutes} onChange=***REMOVED***this.updateMinutes} />
          <p className="colon">:</p>
          <input onBlur=***REMOVED***this.formatSeconds} disabled maxLength="2" max="59" className="timer" type="number" value=***REMOVED***this.state.seconds} onChange=***REMOVED***this.updateSeconds} />
          <br />
          <Button ref="btn" onClick=***REMOVED***this.handleClickPlay} disabled=***REMOVED***this.state.disabled}>
          <MdPlayArrow />
          </Button>
          <Button onClick=***REMOVED***this.handleClickPause} disabled=***REMOVED***!this.state.disabled}>
            <MdPause />
          </Button>
          <Button onClick=***REMOVED***this.handleClickReset}>
            <MdRefresh />
          </Button>
          <Button ref="btn" onClick=***REMOVED***this.handleSwitchModes} disabled=***REMOVED***this.state.disabled}>Switch Modes ***REMOVED***this.state.br}</Button>
          <Notification ref=***REMOVED***ref => (this.notification = ref)} />
          <br />
          <FormControlLabel
              control=***REMOVED***
                <Switch
                  checked=***REMOVED***this.state.continious}
                  onChange=***REMOVED***this.handleSwitchContinue}
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
