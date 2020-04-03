import './GroupStudy.css'
import React from 'react';
import Chat from '../Chat/Chat'
import openSocket from 'socket.io-client';
import Timer from '../GroupTimer/Timer';
import url from 'url';
import Button from '@material-ui/core/Button';
import LogoutButton from '../../Components/LogoutButton/LogoutButton'
const socket = openSocket('http://localhost:3001');

class GroupStudy extends React.Component ***REMOVED***
    constructor(props) ***REMOVED***
        super();
        this.props = props;
        this.backtoDash = this.backtoDash.bind(this);
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
              this.props.history.push('/dashboard/group/auth');
            }
          ***REMOVED***
    }

    backtoDash() ***REMOVED***
      this.props.history.push('/dashboard')
    }

    render()***REMOVED***
        return(
        <div>
            <div className="back-controls">
              <Button variant="contained" onClick=***REMOVED***this.backtoDash} >Go back</Button>
              <LogoutButton></LogoutButton>
            </div>
            <Timer socket=***REMOVED***socket} className="timer-backdrop"/>
            <Chat socket=***REMOVED***socket}/>
        </div>
        )
    }
}

export default GroupStudy;
