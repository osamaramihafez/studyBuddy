import React from 'react'
import './Break.css'
import Button from 'react-bootstrap/Button'

function Break(props) ***REMOVED***

    function increase() ***REMOVED***
        if(props.break < 60)***REMOVED***
            props.changeBreak(props.break+ 1);
        }
        return
      }

    function decrease()***REMOVED***

        if (props.break === 0) ***REMOVED***
            return;
        }

        props.changeBreak(props.break - 1);
    }

 
    return (
        <section className="break-interval-container">
          <h4>Break Timer</h4>
          <section className="break-time-interval">
            <Button
            onClick = ***REMOVED***decrease}
            className='counter-btn'
            >-</Button>
            <p className="break-time">***REMOVED***props.break}</p>
            <Button
            onClick = ***REMOVED***increase}
            className="counter-btn">+</Button>
          </section>
        </section>
    )
}


export default Break