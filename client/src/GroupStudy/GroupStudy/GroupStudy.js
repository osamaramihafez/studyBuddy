import React from 'react';
import Chat from '../Chat/Chat'
import openSocket from 'socket.io-client';
import Timer from '../GroupTimer/Timer';
import url from 'url';
const socket = openSocket('http://localhost:3001');

class GroupStudy extends React.Component ***REMOVED***
    constructor(props) ***REMOVED***
        super();
        this.props = props;
    }
    componentDidMount = () => ***REMOVED***
        let urlObject = url.parse(window.location.href);
        const name = urlObject.query.split("?")[0].split("=")[1];
        const code = urlObject.query.split("?")[1].split("=")[1];
        socket.emit("join", ***REMOVED***
            username: name,
            room: code
          }, (error) => ***REMOVED***
            if (error) ***REMOVED***
              console.log(error);
              alert(error);
              this.props.history("/dashboard")
            }
          ***REMOVED***
    }

    render()***REMOVED***
        return(
        <div>
            <Timer socket=***REMOVED***socket}/>
            <Chat socket=***REMOVED***socket}/>
        </div>
        )
    }
}

export default GroupStudy;
