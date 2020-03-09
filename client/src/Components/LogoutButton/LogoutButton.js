import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Auth from '../../HOC/Auth';

const LogoutButton = (props) => {
    const handleLogout = async () => {
        const tk = Auth.getToken();
        try {
            axios.defaults.headers = {
                Authorization: tk
            }        
            console.log(tk);
            await axios.post('http://localhost:8000/user/logout');
            const res = await axios.post("http://localhost:8000/user/login"){
                email: this.state.email,
                password: this.state.password
            };
        } catch (error) {
            console.log(error);
        }
    }
    return (<Button onClick={handleLogout}>Logout</Button>);
}

export default LogoutButton;

