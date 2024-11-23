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

    async registration(req, res, next) {
        const {login, password} = req.body;
        try {
            const userData = await authService.registration(login, password);
            res.json(userData);
        } catch (err) {
            console.log(err);
            return next(err);
        }
    }
}

module.exports = new AuthController();