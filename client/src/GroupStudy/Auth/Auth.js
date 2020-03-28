import React from 'react'
import ***REMOVED*** Button, Form, Container } from "react-bootstrap";
import './Auth.css'

class SocketAuth extends React.Component ***REMOVED***

    constructor() ***REMOVED***
      super();
      this.state = ***REMOVED***
        dN: null,
        code: null
      }
      this.updateCode = this.updateCode.bind(this);
      this.updateDisplayName = this.updateDisplayName.bind(this);
      this.goStudy = this.goStudy.bind(this)
    }

    goStudy(e) ***REMOVED***
      e.preventDefault();
      console.log(this.state);
      this.props.history.push('/dashboard/group/study?name=' + this.state.dN + '?code=' + this.state.code)
    }

    updateDisplayName(e) ***REMOVED***
      const dN = e.target.value;
      this.setState(***REMOVED***
        dN
      })
    }

    updateCode(e) ***REMOVED***
      const code = e.target.value;
      this.setState(***REMOVED***
        code
      })
    }
    render() ***REMOVED***
        return (
          <Container className="popup-joinroom">
            <h1 className="title">Join Your Group</h1>
            <br />
            <Form onSubmit=***REMOVED***this.goStudy}> 
              <Form.Group controlId="text" action="./test.js">
                <Form.Control
                  type="text"
                  onChange=***REMOVED***this.updateDisplayName}
                  placeholder="Display Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="pwdInp" >
                <Form.Control
                  // onChange=***REMOVED***props.updatePassword}
                  type="password"
                  placeholder="Room Code"
                  onChange=***REMOVED***this.updateCode}
                  required
                />
                <br />
                <Button className="loginButton" variant="success" type="submit" className="login-button">
                  Join
                </Button>
                <br />
              </Form.Group>
            </Form>
        </Container >
        );
      }
}

export default SocketAuth;