import React from "react";

class Timer extends React.Component{
    constructor(){
        super();

    this.state = {
        seconds: 0,
    };

    }
    

    render(){
        return(

            <section>
                <section>
                    <h4> Session </h4>
                    <span>{this.props.timerMinute}</span>
                    <span>:</span>
                    <span>{this.state.seconds === 0 ? "00" :
                    this.state.second < 10 ? "0" +
                    this.state.second : this.state.second}</span>
                </section>
            </section>

        );
    }
}
export default Timer;