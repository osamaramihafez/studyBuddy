import React from 'react'
import './Break.css'

function Break(props) {

    function increase() {
        if(props.break < 60){
            props.changeBreak(props.break+ 1);
        }
        return
      }

    function decrease(){

        if (props.break === 0) {
            return;
        }

        props.changeBreak(props.break - 1);
    }

 
    return (
        <section className="break-interval-container">
          <h4>Break Timer</h4>
          <section className="break-time-interval">
            <button
            onClick = {decrease}
            className='counter-btn'
            >-</button>
            <p className="break-time">{props.break}</p>
            <button
            onClick = {increase}
            className="counter-btn">+</button>
          </section>
        </section>
    )
}


export default Break