const Booking = require('../models/booking');

class BookingRepository {

  async findByShowtimeId(showtime_id) {
    return await Booking.findAll({
    where:{ showtime_id }});
  }
  async create(bookingData) {
    return await Booking.create(bookingData);
  }
  async delete(id) {
    return await Booking.destroy({ where: { id } })
  }
}

module.exports = new BookingRepository();
