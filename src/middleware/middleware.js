function auth() {
    return ((req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login')
    })
}