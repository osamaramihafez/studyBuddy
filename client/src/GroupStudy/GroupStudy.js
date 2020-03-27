import {subscribeToTimer} from './api/api';
import React from 'react'

class GroupStudy extends React.Component {
    constructor(props) {
        super(props)
        subscribeToTimer((erro, timestamp) => this.setState({
            timestamp
        }));
    }
    state = {
        timestamp: 'no timestamp yet'
    };

    render() {
        return (
          <div className="App">
            <p className="App-intro">
            This is the timer value: {this.state.timestamp}
            </p>
          </div>
        );
      }
}

export default GroupStudy;