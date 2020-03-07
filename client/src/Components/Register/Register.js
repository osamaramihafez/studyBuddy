import React from "react";
import ***REMOVED*** Form, FormGroup, FormControl, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import "./Register.css";

class RegistrationForm extends React.Component ***REMOVED***
    state = ***REMOVED***
        name: "",
        email: "",
        password: ""
    }

    validateForm() ***REMOVED***
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    updatePassword(password) ***REMOVED***
        this.setState(***REMOVED*** password ***REMOVED***
    }

    updateEmail(email) ***REMOVED***
        this.setState(***REMOVED*** email ***REMOVED***
    }

    setHeader() ***REMOVED***
        Headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    handleLogin(e, state) ***REMOVED***
        e.preventDefault();
        console.log(state);
        axios.post("http://localhost:8000/user/login", state)
            .then(res => ***REMOVED***
                console.log(res.data.tk);
                localStorage.setItem('id_token', res.data.tk);
                this.setHeader();
            })
            .catch(res => console.log(res.tk));
    }

    handleRegistration(e, state) ***REMOVED***
        e.preventDefault();
        console.log(state);
        axios.post("http://localhost:8000/create/user", state)
            .then(res => ***REMOVED***
                console.log(res.tk);
            })
            .catch(res => ***REMOVED***
                console.log(res.tk);
            ***REMOVED***

    }
    render() ***REMOVED***
        return (
            <Container className="popup">
                <h3 className="subtitle">Registration</h3>
                <br></br>
                <Form onSubmit=***REMOVED***e => this.handleRegistration(e, this.state)}>
                    <Form.Group controlId="name" className="inp-top">
                        <Form.Control
                            autoFocus
                            type="text"
                            onChange=***REMOVED***e => this.updateEmail(e.target.value)}
                            placeholder="name"
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="inp-mid">
                        <Form.Control
                            type="email"
                            onChange=***REMOVED***e => this.updateEmail(e.target.value)}
                            placeholder="email"
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="inp-mid">
                        <Form.Control
                            type="password"
                            onChange=***REMOVED***e => this.updatePassword(e.target.value)}
                            placeholder="password"
                        />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default RegistrationForm;