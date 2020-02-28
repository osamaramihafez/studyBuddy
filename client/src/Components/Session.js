import React from 'react'
import './Session.css'

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
            <button
            disabled = ***REMOVED***props.isPlay ? "disabled" : ""}
            onClick = ***REMOVED***decrease}
            className="counter-btn">-</button>
            <p className="session-time">***REMOVED***props.session}</p>
            <button
            onClick = ***REMOVED***increase}
            className="counter-btn">+</button>
          </section>
        </section>
      )

}

export default Session