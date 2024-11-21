const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Showtime extends Model {}

Showtime.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hall_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  show_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'showtimes',
});

module.exports = Showtime;