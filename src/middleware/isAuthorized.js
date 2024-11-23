const passport = require('passport')
require('../passport')(passport) 
const isAuthorized = passport.authenticate('jwt', { session: false });

module.exports = isAuthorized