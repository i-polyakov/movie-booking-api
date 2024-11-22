const User = require("../repository/user");

class UserService {
    async login(login, password){
        const user = await User.findByLogin(login);

        if (!user || !user.validatePassword(password)) {
            return next(new Error("Неправильный логин или пароль"), false);
          }
        return next(null, user);
    }
    async signUp(user){
        return await User.create(user);
    }
}

module.exports = new UserService();
