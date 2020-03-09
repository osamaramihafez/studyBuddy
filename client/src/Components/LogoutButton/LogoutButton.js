import React from 'react';
import ***REMOVED***Button} from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../HOC/Auth';

const LogoutButton = (props) => ***REMOVED***
    const handleLogout = async () => ***REMOVED***
        const tk = Auth.getToken();
        try ***REMOVED***
            axios.defaults.headers = ***REMOVED***
                Authorization: tk
            }        
            console.log(tk);
            await axios.post('http://localhost:8000/user/logout');
            const res = await axios.post("http://localhost:8000/user/login")***REMOVED***
                email: this.state.email,
                password: this.state.password
            };
        } catch (error) ***REMOVED***
            console.log(error);
        }
    }
    return (<Button onClick=***REMOVED***handleLogout}>Logout</Button>);
}

export default LogoutButton;

