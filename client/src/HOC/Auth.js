const Auth = ***REMOVED***
    isAuthenticated: false,
    authenticate() ***REMOVED***
        this.isAuthenticated = true;
    },
    signout() ***REMOVED***
        this.isAuthenticated = false;
    },
    getAuth() ***REMOVED***
        return this.isAuthenticated;
    }
};
    export default Auth;