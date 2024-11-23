const User = require('../models/user');

class UserRepository {

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByLogin(login) {
    return await User.findOne({ where: { login: login } });
  }
  
  async create(userData) {
    return await User.create(userData);
  }
  
}

module.exports = new UserRepository();
