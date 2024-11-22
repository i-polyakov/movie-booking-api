const authService = require("../services/auth");

class AuthController {
    login(req, res, next) {
        try {
            passport.authenticate("local", (err, user, info) => {
                if (user) {
                    req.session.user = user;
                    req.session.role = user.role;

                    return res.json(new Response("Authorization successful", 200));
                }
                return next(err);
            })(req, res, next);
        } catch (err) {
            next(err);
        }
    }

    logout(req, res, next) {
        req.session.user = null;
        res.json(new Response("You unauthorized", 200));
    }

    async signUp(req, res, next) {
        const userData = req.body;
        try {
            await authService.signUp(userData);
            res.json(new Response("Registration successful", 200));
        } catch (err) {
            console.log(err);
            return next(err);
        }
    }
}

module.exports = new AuthController();