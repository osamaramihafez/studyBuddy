import React from "react";
import { Form, Container, Button, OverlayTrigger, Popover, Alert, Overlay } from "react-bootstrap";
import axios from 'axios'
import Cookies from 'universal-cookie';
import "./Register.css";
var nodemailer = require('nodemailer');

class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            valid: false,
            alert: <div></div>
        }
        this.handleRegistration = this.handleRegistration.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
        this.validateForm = this.validateForm.bind(this);

    }

    validateForm() {
        var emailReg = /\S+@\S+/;
        const passReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
        // console.log(re.test(this.state.email));
        if ((this.state.name.length > 0 && emailReg.test(this.state.email)) && (passReg.test(this.state.password))) this.setState({ valid: true });
    }

    updateName(e) {
        this.setState({ name: e.target.value });
        this.validateForm();
    }

    updatePassword(e) {
        this.setState({ password: e.target.value });
        this.validateForm();
    }

    updateEmail(e) {
        this.setState({ email: e.target.value });
        this.validateForm();
    }

    sendMail(e) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'studdybuddycsc301@gmail.com',
              pass: 'Studdy123'
            }
          });
          
        var mailOptions = {
            from: 'studdybuddycsc301@gmail.com',
            to: 'dboyzinthehouse@gmail.com',
            subject: 'Sending Email using Node.js',
            text: `Hi , thank you for registering with Studdy Buddy!`      
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    handleRegistration(e) {
        e.preventDefault();
        console.log(this.state);

        axios.post("http://localhost:8000/create/user", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                const cookies = new Cookies();
                cookies.set('Authorization', 'Bearer ' + res.data.tk);
                this.props.history.push('/dashboard');
            })
            .catch(res => {
                this.setState({
                    alert: (
                        <Alert
                            variant="danger">Unable to Register! There is an account that exists with that email
                            </Alert>)
                })
            });

    }
    render() {
        return (
            <Container className="left-side-reg">
                <Container className="inner-form">
                    <h3 className="subtitle">Registration</h3>
                    <br></br>
                    <Form onSubmit={this.handleRegistration, this.sendMail}>
                        <Form.Group controlId="name" className="inp-top">
                            <Form.Control
                                autoFocus
                                type="text"
                                onChange={this.updateName}
                                placeholder="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="test">
                            <Form.Control
                                type="email"
                                onChange={this.updateEmail}
                                placeholder="email"
                            />
                        </Form.Group>
                        <OverlayTrigger
                            placement="right"
                            trigger="focus"
                            overlay={
                                <Popover id={`popover-positioned-bottom`}>
                                    <Popover.Title as="h3">Password Guidelines</Popover.Title>
                                    <Popover.Content>
                                        <ul>
                                            <li>More than 5 characters</li>
                                            <li>At least one number</li>
                                            <li>At least one uppercase letter</li>
                                            <li>At least one lowercase letter</li>
                                        </ul>
                                    </Popover.Content>
                                </Popover>
                            }>
                            <Form.Group controlId="password" className="test1">
                                <Form.Control
                                    type="password"
                                    onChange={this.updatePassword}
                                    placeholder="password"
                                />
                            </Form.Group>
                        </OverlayTrigger>
                        <br></br>
                        <Button variant="primary" type="submit" disabled={!this.state.valid}>Submit</Button>
                        {this.state.alert}
                    </Form>
                </Container>
            </Container>
        );
    }
}

export default RegistrationForm;