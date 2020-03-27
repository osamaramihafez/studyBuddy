import ***REMOVED***subscribeToTimer} from './api/api';
import React from 'react'

class GroupStudy extends React.Component ***REMOVED***
    constructor(props) ***REMOVED***
        super(props)
        subscribeToTimer((erro, timestamp) => this.setState(***REMOVED***
            timestamp
        }));
    }
    state = ***REMOVED***
        timestamp: 'no timestamp yet'
    };

    render() ***REMOVED***
        return (
          <div className="App">
            <p className="App-intro">
            This is the timer value: ***REMOVED***this.state.timestamp}
            </p>
          </div>
        );
      }
}

export default GroupStudy;