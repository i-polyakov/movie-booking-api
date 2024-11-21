const Hall = require("../repository/hall");

class HallService {
    async getAll(){
        return Hall.findAll();
    }
}

module.exports = new HallService();
