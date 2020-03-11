import React, { Component } from 'react';
import axios from 'axios';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            tokens: [],
            tasks: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/Task/')
        .then(response => {
          this.setState({ tasks: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    
        axios.get('http://localhost:3000/User/' + this.props.match.params.id)
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                name: response.data.name,
                email: response.data.email,
                tokens: response.data.tokens,
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const user = {
          name: this.state.username,
          email: this.state.email,
          tokens: this.state.tokens,
          tasks: this.state.tasks
        }
    
        console.log(user);
        axios.post('http://localhost:3000/User/update/' + this.props.match.params.id, user)
            .then(res => console.log(res.data));
    }
      
  render() {
    return (
      <div>
          <p>You are on the profile page!</p>
      </div>
    );
  }
}