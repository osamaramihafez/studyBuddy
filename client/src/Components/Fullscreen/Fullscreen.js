import React, { Component } from "react";
import FullScreen from 'react-request-fullscreen';
import Dashboard from "../Dashboard/Dashboard";
 
class Fullscreen extends Component {
  constructor(props) {
    super();
 
    this.state = {
      isFull: false,
    };
  }
 
  goFull = () => {
    this.setState({ isFull: true });
  }
 

  render() {
    return (
        <FullScreen />

    //   <div className="App">
    //     <button onClick={this.goFull}>
    //       Go Fullscreen
    //     </button>
 
    //     <Fullscreen
    //       enabled={this.state.isFull}
    //       onChange={isFull => this.setState({isFull})}
    //     >
    //     <button onclick="openFullscreen();">Open Fullscreen</button>
    //       {/* <div className="full-screenable-node">
    //         Hi! This may cover the entire monitor.
    //       </div> */}
    //     </Fullscreen>
    //   </div>
    );
  }
}
 
export default Fullscreen;