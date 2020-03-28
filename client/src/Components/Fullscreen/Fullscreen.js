import React, ***REMOVED*** Component } from "react";
import FullScreen from 'react-request-fullscreen';
 
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
    );
  }
}
 
export default Fullscreen;