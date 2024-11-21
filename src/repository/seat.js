const Seat = require('../models/seat');

class SeatRepository {
  async findAll() {
    return await Seat.findAll();
  }
  async findByHallId(hall_id) {
    return await Seat.findAll({where:{ hall_id }});
  }
}

module.exports = new SeatRepository();
