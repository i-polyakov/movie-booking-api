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
    type: DataTypes.STRING(60),
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


module.exports = User;