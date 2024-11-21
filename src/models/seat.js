const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Seat extends Model {}

Seat.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hall_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
   
  },
  row: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  number: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
}, {
  sequelize,

  tableName: 'seats',
});

module.exports = Seat;