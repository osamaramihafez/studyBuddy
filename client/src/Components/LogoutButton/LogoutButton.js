import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Auth from '../../HOC/Auth';
import Cookies from 'universal-cookie';

class LogoutButton extends React.Component ***REMOVED***

    constructor(props) ***REMOVED***
        super()
        this.props = props;
        this.handleLogout = this.handleLogout.bind(this);
    }
    
     async handleLogout () ***REMOVED***
        const tk = Auth.getToken();
        try ***REMOVED***
            axios.defaults.headers = ***REMOVED***
                Authorization: tk
            }        
            console.log(tk);
            await axios.post('http://localhost:8000/user/logout');
            const cookies = new Cookies();
            cookies.remove('Authorization');
            window.location.href="/";
        } catch (error) ***REMOVED***
            console.log(error);
        }
    }
    render () ***REMOVED***

        return (<Button variant="contained" onClick=***REMOVED***this.handleLogout}>Logout</Button>);
    }
}

export default LogoutButton;

