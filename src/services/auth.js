const User = require("../repository/user");
const bcrypt = require("bcrypt");
const TokenService = require("./token");
const { BadRequest } = require("../errors/APIError");

class UserService {
    async login(login, password) {
        const user = await User.findByLogin(login);
        if (!user || ! await bcrypt.compare(password, user.password)) {
            throw BadRequest("Неправильный логин или пароль")
        }
        const token = TokenService.generateToken({ id: user.id, login: user.login, role: user.role })
     
        
        return {token, user}
    }
    async registration(login, password) {
        const user = await User.findByLogin(login);
        
        if (user) {
            throw BadRequest(`Пользовать ${login} уже существует`)
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({ login, password: hashedPassword, role: 'user'});
        const token = TokenService.generateToken({ id: createdUser.id, login: createdUser.login, role: 'user' })
        return {
            token,
            createdUser
        }
    }
}

module.exports = new UserService();
