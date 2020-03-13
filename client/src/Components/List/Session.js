import React from 'react'
import './Session.css'

function Session(props) {

    function increase() {
        if(props.session < 60){
            props.changeSession(props.session + 1);
        }
        return
      }

    function decrease(){

        if (props.session === 0) {
            return;
        }

        props.changeSession(props.session - 1);
    }

    return (
        <section className="session-interval-container">
          <h4>Session Timer</h4>
          <section className="session-interval">
            <button
            onClick = {decrease}
            className="counter-btn">-</button>
            <p className="session-time">{props.session}</p>
            <button
            onClick = {increase}
            className="counter-btn">+</button>
          </section>
        </section>
      )

}

export default Session