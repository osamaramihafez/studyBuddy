import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
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

    handleRegistration(e, state) {
        e.preventDefault();
        console.log(state);
    }
    render() {
        return (
            <div className="Register">
                <form onSubmit={e => this.handleRegistration(e, this.state)}>
                    <FormGroup controlId="name" className="emailInp">
                        <FormControl
                            autoFocus
                            type="text"
                            onChange={e => this.updateEmail(e.target.value)}
                            placeholder="name"
                        />
                    </FormGroup>
                    <FormGroup controlId="email" className="emailInp">
                        <FormControl
                            type="email"
                            onChange={e => this.updateEmail(e.target.value)}
                            placeholder="email"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" className="pwdInp">
                        <FormControl
                            onChange={e => this.updatePassword(e.target.value)}
                            type="password"
                            placeholder="password"
                        />
                    </FormGroup>
                    <Button variant="outline-secondary" type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;