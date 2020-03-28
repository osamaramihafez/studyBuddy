import React from 'react';
import Chat from '../Chat/Chat'
import openSocket from 'socket.io-client';
import Timer from '../GroupTimer/Timer';
import url from 'url';
const socket = openSocket('http://localhost:3001');

class GroupStudy extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }
    componentDidMount = () => {
        let urlObject = url.parse(window.location.href);
        const name = urlObject.query.split("?")[0].split("=")[1];
        const code = urlObject.query.split("?")[1].split("=")[1];
        socket.emit("join", {
            username: name,
            room: code
          }, (error) => {
            if (error) {
              console.log(error);
              alert(error);
              this.props.history("/dashboard")
            }
          });
    }

    render(){
        return(
        <div>
            <Timer socket={socket}/>
            <Chat></Chat>
        </div>
        )
    }
}

export default GroupStudy;
