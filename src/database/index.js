const sequelize = require("./sequelize");
// const constants = require("../constants");

// const userService = require("../services/user");

class DataBase {
  async connect() {
    await sequelize.sync();
    console.log("DB connected");

    // userService.setRole(admin.id, constants.adminRoleNum);
  }
}


module.exports = new DataBase();
