function auth() ***REMOVED***
    return ((req, res, next) => ***REMOVED***
        if(req.isAuthenticated()) ***REMOVED***
            return next();
        }
        res.redirect('/login')
    })
}