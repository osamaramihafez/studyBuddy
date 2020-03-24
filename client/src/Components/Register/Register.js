import React from "react";
import ***REMOVED*** Form, Container, Button, OverlayTrigger, Popover, Alert, Overlay } from "react-bootstrap";
import axios from 'axios'
import Cookies from 'universal-cookie';
import "./Register.css";
var nodemailer = require('nodemailer');

class RegistrationForm extends React.Component ***REMOVED***
    constructor() ***REMOVED***
        super();
        this.state = ***REMOVED***
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

    validateForm() ***REMOVED***
        var emailReg = /\S+@\S+/;
        const passReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.***REMOVED***6,})/;
        // console.log(re.test(this.state.email));
        if ((this.state.name.length > 0 && emailReg.test(this.state.email)) && (passReg.test(this.state.password))) this.setState(***REMOVED*** valid: true ***REMOVED***
    }

    updateName(e) ***REMOVED***
        this.setState(***REMOVED*** name: e.target.value ***REMOVED***
        this.validateForm();
    }

    updatePassword(e) ***REMOVED***
        this.setState(***REMOVED*** password: e.target.value ***REMOVED***
        this.validateForm();
    }

    updateEmail(e) ***REMOVED***
        this.setState(***REMOVED*** email: e.target.value ***REMOVED***
        this.validateForm();
    }

    sendMail(e) ***REMOVED***
        var transporter = nodemailer.createTransport(***REMOVED***
            service: 'gmail',
            auth: ***REMOVED***
              user: 'studdybuddycsc301@gmail.com',
              pass: 'Studdy123'
            }
          ***REMOVED***
          
        var mailOptions = ***REMOVED***
            from: 'studdybuddycsc301@gmail.com',
            to: 'dboyzinthehouse@gmail.com',
            subject: 'Sending Email using Node.js',
            text: `Hi , thank you for registering with Studdy Buddy!`      
        };
        
        transporter.sendMail(mailOptions, function(error, info)***REMOVED***
            if (error) ***REMOVED***
                console.log(error);
            } else ***REMOVED***
                console.log('Email sent: ' + info.response);
            }
        ***REMOVED***
    }

    handleRegistration(e) ***REMOVED***
        e.preventDefault();
        console.log(this.state);

        axios.post("http://localhost:8000/create/user", ***REMOVED***
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => ***REMOVED***
                const cookies = new Cookies();
                cookies.set('Authorization', 'Bearer ' + res.data.tk);
                this.props.history.push('/dashboard');
            })
            .catch(res => ***REMOVED***
                this.setState(***REMOVED***
                    alert: (
                        <Alert
                            variant="danger">Unable to Register! There is an account that exists with that email
                            </Alert>)
                })
            ***REMOVED***

    }
    render() ***REMOVED***
        return (
            <Container className="left-side-reg">
                <Container className="inner-form">
                    <h3 className="subtitle">Registration</h3>
                    <br></br>
                    <Form onSubmit=***REMOVED***this.handleRegistration, this.sendMail}>
                        <Form.Group controlId="name" className="inp-top">
                            <Form.Control
                                autoFocus
                                type="text"
                                onChange=***REMOVED***this.updateName}
                                placeholder="name"
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="test">
                            <Form.Control
                                type="email"
                                onChange=***REMOVED***this.updateEmail}
                                placeholder="email"
                            />
                        </Form.Group>
                        <OverlayTrigger
                            placement="right"
                            trigger="focus"
                            overlay=***REMOVED***
                                <Popover id=***REMOVED***`popover-positioned-bottom`}>
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
                                    onChange=***REMOVED***this.updatePassword}
                                    placeholder="password"
                                />
                            </Form.Group>
                        </OverlayTrigger>
                        <br></br>
                        <Button variant="primary" type="submit" disabled=***REMOVED***!this.state.valid}>Submit</Button>
                        ***REMOVED***this.state.alert}
                    </Form>
                </Container>
            </Container>
        );
    }
}

export default RegistrationForm;