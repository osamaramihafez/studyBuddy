import React from "react";
import { Form, FormGroup, FormControl, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import "./Register.css";

class RegistrationForm extends React.Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    updatePassword(password) {
        this.setState({ password });
    }

    updateEmail(email) {
        this.setState({ email });
    }

    setHeader() {
        Headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    handleLogin(e, state) {
        e.preventDefault();
        console.log(state);
        axios.post("http://localhost:8000/user/login", state)
            .then(res => {
                console.log(res.data.tk);
                localStorage.setItem('id_token', res.data.tk);
                this.setHeader();
            })
            .catch(res => console.log(res.tk));
    }

    handleRegistration(e, state) {
        e.preventDefault();
        console.log(state);
        axios.post("http://localhost:8000/create/user", state)
            .then(res => {
                console.log(res.tk);
            })
            .catch(res => {
                console.log(res.tk);
            });

    }
    render() {
        return (
            <Container className="popup">
                <h3 className="subtitle">Registration</h3>
                <br></br>
                <Form onSubmit={e => this.handleRegistration(e, this.state)}>
                    <Form.Group controlId="name" className="inp-top">
                        <Form.Control
                            autoFocus
                            type="text"
                            onChange={e => this.updateEmail(e.target.value)}
                            placeholder="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="inp-mid">
                        <Form.Control
                            type="email"
                            onChange={e => this.updateEmail(e.target.value)}
                            placeholder="email"
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="inp-mid">
                        <Form.Control
                            type="password"
                            onChange={e => this.updatePassword(e.target.value)}
                            placeholder="password"
                        />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default RegistrationForm;