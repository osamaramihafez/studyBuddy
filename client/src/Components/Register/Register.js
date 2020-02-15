import React from "react";
import ***REMOVED*** FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
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

    handleRegistration(e, state) ***REMOVED***
        e.preventDefault();
    }
    render() ***REMOVED***
        return (
            <div className="Register">
                <form onSubmit=***REMOVED***e => this.handleRegistration(e, this.state)}>
                    <FormGroup controlId="name" className="inp-top">
                        <FormControl
                            autoFocus
                            type="text"
                            onChange=***REMOVED***e => this.updateEmail(e.target.value)}
                            placeholder="name"
                        />
                    </FormGroup>
                    <FormGroup controlId="email" className="inp-mid">
                        <FormControl
                            type="email"
                            onChange=***REMOVED***e => this.updateEmail(e.target.value)}
                            placeholder="email"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" className="inp-mid">
                        <FormControl
                            type="password"
                            onChange=***REMOVED***e => this.updatePassword(e.target.value)}
                            placeholder="password"
                        />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;