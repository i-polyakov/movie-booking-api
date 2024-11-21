const Hall = require('../models/hall');

class HallRepository {
  async findAll() {
    return await Hall.findAll();
  }
}

module.exports = new HallRepository();
