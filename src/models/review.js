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
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  sequelize,
  tableName: 'reviews',
  timestamps: false,
});

module.exports = Review;