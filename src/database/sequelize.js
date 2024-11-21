const Sequelize = require("sequelize");
const config = require("../config/sequelize");
console.log(config);
const sequelize = new Sequelize(config);

module.exports = sequelize;
