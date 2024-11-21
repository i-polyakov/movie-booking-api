const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Movie extends Model {}

Movie.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  released: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  runtime: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  plot: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  relevant: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
}, {
  sequelize,
  tableName: 'movies'
});


module.exports = Movie;