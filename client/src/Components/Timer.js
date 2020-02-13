import React from "react";

class Timer extends React.Component***REMOVED***
    constructor()***REMOVED***
        super();

    this.state = ***REMOVED***
        seconds: 0,
    };

    }
    

    render()***REMOVED***
        return(

            <section>
                <section>
                    <h4> Session </h4>
                    <span>***REMOVED***this.props.timerMinute}</span>
                    <span>:</span>
                    <span>***REMOVED***this.state.seconds === 0 ? "00" :
                    this.state.second < 10 ? "0" +
                    this.state.second : this.state.second}</span>
                </section>
            </section>

        );
    }
}
export default Timer;