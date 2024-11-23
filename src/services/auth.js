const User = require("../repository/user");
const bcrypt = require("bcrypt");
const TokenService = require("./token")

class UserService {
    async login(login, password) {
        const user = await User.findByLogin(login);

        if (!user || !user.validatePassword(password)) {
            return next(new Error("Неправильный логин или пароль"), false);
        }
        return next(null, user);
    }
    async registration(login, password) {
        const user = await User.findByLogin(login);
        
        if (user) {
            throw new Error(`Пользовать ${login} уже существует`)
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({ login, password: hashedPassword, role: 'user'});
        const token = TokenService.generateToken({ id: createdUser.id, login: createdUser.login, role: 'user' })
        console.log(createdUser, token);
        return {
            token,
            createdUser
        }
    }
}

module.exports = new UserService();
