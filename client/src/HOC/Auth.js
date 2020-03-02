import decode from 'jwt-decode';
import Cookies from 'universal-cookie';

const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
    export default Auth;