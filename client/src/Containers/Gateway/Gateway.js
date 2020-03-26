import React, ***REMOVED*** Component } from 'react'
import ***REMOVED*** Container, Form} from 'react-bootstrap'
import './Gateway.css'

export default class Gateway extends Component ***REMOVED***
    constructor() ***REMOVED***
        super();
        this.state = ***REMOVED***
            groupCode: null
        }
        this.submitCode = this.submitCode.bind(this);
    }

    submitCode(e)***REMOVED***
        e.preventDefault();
        console.log(this.state.groupCode)
    }

    groupHandler = (e) => ***REMOVED***
        this.setState(***REMOVED***
            groupCode: e.target.value
        })
    }

    render() ***REMOVED***
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
                    <Form onSubmit=***REMOVED***this.submitCode}>
                        <Form.Group controlId="test">
                        <Form.Control
                            type="string"
                            onChange=***REMOVED***this.groupHandler}
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
