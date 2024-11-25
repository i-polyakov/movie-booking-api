const passport = require('passport')
require('../passport')(passport) 
const ApiError = require("../errors/APIError");

const isAuthorized = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) return next(err);
        if (!user) return next(ApiError.Unauthorized());
        req.user = user;
        next()
    })(req, res, next)
};

module.exports = isAuthorized