import React from 'react'
import './Break.css'

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
            <button
            onClick = ***REMOVED***decrease}
            className='counter-btn'
            >-</button>
            <p className="break-time">***REMOVED***props.break}</p>
            <button
            onClick = ***REMOVED***increase}
            className="counter-btn">+</button>
          </section>
        </section>
      )







}


export default Break