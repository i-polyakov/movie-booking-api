const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Review extends Model {}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rate: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  create_at: {
    type: "TIMESTAMP",
    allowNull: false,
    defaultValue: sequelize.fn('GETDATE'),
  }
}, {
  sequelize,
  tableName: 'reviews'
});

module.exports = Review;