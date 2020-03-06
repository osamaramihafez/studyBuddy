import Cookies from 'universal-cookie';
import decode from 'jwt-decode';

const Auth = ***REMOVED***
    isAuthenticated: false,
    getToken() ***REMOVED***
        const cookies = new Cookies();
        const cookie = cookies.get('Authorization');
        return cookie;
    },
    authenticate() ***REMOVED***
        try ***REMOVED***
            const tk = this.getToken();
            const decoded = decode(tk);
            console.log(decoded.iat);
            console.log(Date.now() / 1000);

            if (decoded.iat < Date.now() / 1000) ***REMOVED***
                return this.isAuthenticated = true;

            }
        } catch (error) ***REMOVED***
            return this.isAuthenticated = false;
        }
    },
    logout() ***REMOVED***
        this.isAuthenticated = false;
    },
    getAuth() ***REMOVED***
        return this.isAuthenticated;
    }
};
export default Auth;