const authService = require("../services/auth");

class AuthController {
    async login(req, res, next) {
        try {
            const {login, password} = req.body;
            const userData = await authService.login(login, password);
            res.json(userData);    
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
            return next(err);
        }
    }
}

module.exports = new AuthController();