const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("./repository/user");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

        User.findById(jwt_payload.id).then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }).catch(err => done(err, null))
    }))
};
