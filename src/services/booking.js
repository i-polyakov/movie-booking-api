const Booking = require("../repository/booking");

class BookingService {
    async getByShowtimeId(showtime_id){
        return Booking.findByShowtimeId(showtime_id);
    }
    async create(booking){
        return Booking.create(booking);
    }
    async delete(id){
        return Booking.delete(id);
    }
}

module.exports = new BookingService();
