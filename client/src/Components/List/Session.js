import React from 'react'
import './Session.css'
import Button from 'react-bootstrap/Button'

function Session(props) ***REMOVED***

    function increase() ***REMOVED***
        if(props.session < 60)***REMOVED***
            props.changeSession(props.session + 1);
        }
        return
      }

    function decrease()***REMOVED***

        if (props.session === 0) ***REMOVED***
            return;
        }

        props.changeSession(props.session - 1);
    }

    return (
        <section className="session-interval-container">
          <h4>Session Timer</h4>
          <section className="session-interval">
            <Button
            disabled = ***REMOVED***props.isPlay ? "disabled" : ""}
            onClick = ***REMOVED***decrease}
            className="counter-btn">-</Button>
            <p className="session-time">***REMOVED***props.session}</p>
            <Button
            onClick = ***REMOVED***increase}
            className="counter-btn">+</Button>
          </section>
        </section>
      )

}

export default Session