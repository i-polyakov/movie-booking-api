const sequelize = require("./sequelize");
require("../models"); // создание ассоциаций моделей


class DataBase {
  async connect() {
    await sequelize.sync();
    console.log("DB connected");
  }
}


module.exports = new DataBase();
