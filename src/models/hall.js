const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Hall extends Model {}

Hall.init({
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'halls',
});

module.exports = Hall;