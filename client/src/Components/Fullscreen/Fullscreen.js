import React, ***REMOVED*** Component } from "react";
import FullScreen from 'react-request-fullscreen';
import Dashboard from "../Dashboard/Dashboard";
 
class Fullscreen extends Component ***REMOVED***
  constructor(props) ***REMOVED***
    super();
 
    this.state = ***REMOVED***
      isFull: false,
    };
  }
 
  goFull = () => ***REMOVED***
    this.setState(***REMOVED*** isFull: true ***REMOVED***
  }
 

  render() ***REMOVED***
    return (
        <FullScreen />

    //   <div className="App">
    //     <button onClick=***REMOVED***this.goFull}>
    //       Go Fullscreen
    //     </button>
 
    //     <Fullscreen
    //       enabled=***REMOVED***this.state.isFull}
    //       onChange=***REMOVED***isFull => this.setState(***REMOVED***isFull})}
    //     >
    //     <button onclick="openFullscreen();">Open Fullscreen</button>
    //       ***REMOVED***/* <div className="full-screenable-node">
    //         Hi! This may cover the entire monitor.
    //       </div> */}
    //     </Fullscreen>
    //   </div>
    );
  }
}
 
export default Fullscreen;