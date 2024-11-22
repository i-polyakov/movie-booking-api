const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const bcrypt = require("bcrypt");

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'users'
});


User.beforeCreate((user, opts) => {
  user.password = User.hashPassword(user.password);
});

User.hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.prototype.validatePassword = function(password) {
  if (!password || !this.password) {
    return false;
  }
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;