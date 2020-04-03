import './Chat.css'
import React from 'react';
import Moment from 'react-moment';
import ***REMOVED***Form, FormControl, Button} from 'react-bootstrap'

class Chat extends React.Component ***REMOVED***
    constructor(props) ***REMOVED***
        super();
        this.props = props;
        this.state = ***REMOVED***
            msg: "",
            chat: [],
        }
        this.socket = this.props.socket
    }

    componentDidMount = () => ***REMOVED***
        this.socket.on("message", (obj) => ***REMOVED***
            // Add new messages to existing messages in "chat"
            console.log(obj);
            this.setState(***REMOVED***
                chat: this.state.chat.concat(***REMOVED***
                    username: obj.username, 
                    msg: obj.msg,
                    createdAt: obj.createdAt})
            ***REMOVED***
        ***REMOVED***
    }

    renderMessages() ***REMOVED***
        return this.state.chat.map((obj, index) => (
          <div key=***REMOVED***index}>
            <span className="username">***REMOVED***obj.username}: </span>
            <span className="message">***REMOVED***obj.msg} </span>
            <Moment format="HH:mm" className="date">***REMOVED***obj.createdAt}</Moment>
          </div>
        ));
      }
    
      updateMessage = e => ***REMOVED***
        this.setState(***REMOVED*** msg: e.target.value ***REMOVED***
      };

      handleMessageSubmit = (e) => ***REMOVED***
          e.preventDefault();
        if(!this.state.msg.length <= 0) ***REMOVED***
            this.socket.emit("sendMessage", this.state.msg);
            this.setState(***REMOVED*** msg: "" ***REMOVED***
        }
      };
    render() ***REMOVED***
        return (
          <div>
            <div className="message-box">
            <Button variant="outline-primary" type="submit" className="send-button">Send</Button>
            <Form className="mb-3" onSubmit=***REMOVED***this.handleMessageSubmit}>
                    <FormControl
                    placeholder="Your message"
                    aria-label="Your message"
                    aria-describedby="basic-addon2"
                    className="message-inp"
                    onChange=***REMOVED***this.updateMessage}
                    value=***REMOVED***this.state.msg}
                    />
            </Form>
            <div className="messages">***REMOVED***this.renderMessages()}</div>
            </div>
          </div>
        );
      }
}

export default Chat;
