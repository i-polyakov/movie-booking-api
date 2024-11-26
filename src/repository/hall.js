const Hall = require('../models/hall');

class HallRepository {
  async findAll() {
    return await Hall.findAll();
  }
  async findOne(id) {
    return await Hall.findByPk(id);
  }
}

module.exports = new HallRepository();
