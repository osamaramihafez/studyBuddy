import React, ***REMOVED*** Component } from 'react'
import ***REMOVED*** Container, Button} from 'react-bootstrap'
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
                <div className="container-left">
                    <h2 className="subtitle-left">
                        Solo Studying
                    </h2>
                    
                    <p className="text">Study by yourself with just an adjustable timer and task manager.</p>
                    <a href="/dashboard/solo">
                        <Button className="test">Start Studying</Button>
                    </a>
                </div>
                <div className="container-right">
                    <h2 className="subtitle-right">
                        Group Studying
                    </h2>
                    <p className="text">Study with your team with the standard timer and with an added group chat!</p>
                        <Button className="test">Create a Room</Button>
                    <a href="/dashboard/group/auth">
                        <Button className="test">Join a Room</Button>
                    </a>


                </div>
            </Container>
        )
    }
}
