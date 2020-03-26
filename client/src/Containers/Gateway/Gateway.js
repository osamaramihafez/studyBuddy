import React, { Component } from 'react'
import { Container, Form} from 'react-bootstrap'
import './Gateway.css'

export default class Gateway extends Component {
    constructor() {
        super();
        this.state = {
            groupCode: null
        }
        this.submitCode = this.submitCode.bind(this);
    }

    submitCode(e){
        e.preventDefault();
        console.log(this.state.groupCode)
    }

    groupHandler = (e) => {
        this.setState({
            groupCode: e.target.value
        })
    }

    render() {
        return (
            <Container className="container">
                <h1 className="title-1">How do you want to study?</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <a href="/dashboard/solo">
                <div className="container-left">
                    <h2 className="subtitle-left">
                        Solo Studying
                    </h2>
                    <p className="text">Study by yourself with just an adjustable timer and task manager.</p>
                </div>
                </a>
                <div className="container-right">
                    <h2 className="subtitle-right">
                        Group Studying
                    </h2>
                    <p className="text">Study with your team with the standard timer and with an added group chat!</p>
                    <Form onSubmit={this.submitCode}>
                        <Form.Group controlId="test">
                        <Form.Control
                            type="string"
                            onChange={this.groupHandler}
                            placeholder="Group Code"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </Form.Group>
                    </Form>
                </div>
            </Container>
        )
    }
}
