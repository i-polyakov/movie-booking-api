const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Genre extends Model {}

Genre.init({
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'genres'
});



module.exports = Genre;