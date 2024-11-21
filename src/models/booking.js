const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Booking extends Model {}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  showtime_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'bookings',
});

module.exports = Booking;