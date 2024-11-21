const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Genre extends Model {}

Genre.init({
  id: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Genre',
  tableName: 'genres'
});

module.exports = Genre;