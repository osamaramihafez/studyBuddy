import './Chat.css'
import React from 'react';
import openSocket from 'socket.io-client';
import url from 'url' 
const socket = openSocket('http://localhost:3001');

class Chat extends React.Component ***REMOVED***
    constructor(props) ***REMOVED***
        super();
        this.props = props
        this.state = ***REMOVED***
            msg: "",
            chat: [],
            room: this.props.room
        }
        socket.on("message", obj => ***REMOVED***

            console.log(obj)
        })
    }

    componentDidMount = () => ***REMOVED***
        let urlObject = url.parse(window.location.href);
        console.log(urlObject.query.split("=")[1]);
        this.setState(***REMOVED***
            room: urlObject.query.split("=")[1]
        })
    }

    renderChat() ***REMOVED***
        const ***REMOVED*** chat } = this.state;
        return chat.map((***REMOVED*** id, msg }, idx) => (
          <div key=***REMOVED***idx}>
            <span style=***REMOVED******REMOVED*** color: "green" }}>***REMOVED***id}: </span>
    
            <span>***REMOVED***msg}</span>
          </div>
        ));
      }
    
    onTextChange = e => ***REMOVED***
        this.setState(***REMOVED*** msg: e.target.value ***REMOVED***
      };

    componentDidMount() ***REMOVED***

      }

    handleSendMessage = () => ***REMOVED***
        socket.emit("sendMessage", this.state.msg);
        this.setState(***REMOVED*** msg: "" ***REMOVED***
    }
    handleRecieveMessage(e) ***REMOVED***

    }
    render()***REMOVED***
        return(
        <div className="Test">
            <div>
                <input onChange=***REMOVED***e => this.onTextChange(e)} value=***REMOVED***this.state.msg} />
                    <button onClick=***REMOVED***this.handleSendMessage}>Send</button>
                <div>***REMOVED***this.renderChat()}</div>
            </div>

        </div>
        )
    }
}

export default Chat;
