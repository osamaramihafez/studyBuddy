import './Chat.css'
import React from 'react';
import openSocket from 'socket.io-client';
import url from 'url' 
const socket = openSocket('http://localhost:3001');

class Chat extends React.Component {
    constructor(props) {
        super();
        this.props = props
        this.state = {
            msg: "",
            chat: [],
            room: this.props.room
        }
        socket.on("message", obj => {

            console.log(obj)
        })
    }

    componentDidMount = () => {
        let urlObject = url.parse(window.location.href);
        console.log(urlObject.query.split("=")[1]);
        this.setState({
            room: urlObject.query.split("=")[1]
        })
    }

    renderChat() {
        const { chat } = this.state;
        return chat.map(({ id, msg }, idx) => (
          <div key={idx}>
            <span style={{ color: "green" }}>{id}: </span>
    
            <span>{msg}</span>
          </div>
        ));
      }
    
    onTextChange = e => {
        this.setState({ msg: e.target.value });
      };

    componentDidMount() {

      }

    handleSendMessage = () => {
        socket.emit("sendMessage", this.state.msg);
        this.setState({ msg: "" });
    }
    handleRecieveMessage(e) {

    }
    render(){
        return(
        <div className="Test">
            <div>
                <input onChange={e => this.onTextChange(e)} value={this.state.msg} />
                    <button onClick={this.handleSendMessage}>Send</button>
                <div>{this.renderChat()}</div>
            </div>

        </div>
        )
    }
}

export default Chat;
