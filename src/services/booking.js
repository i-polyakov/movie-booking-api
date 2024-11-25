const Booking = require("../repository/booking");
const Showtime = require("../repository/showtime");
const Seat = require("../repository/seat");
const ApiError = require("../errors/APIError");


class BookingService {
    async getByShowtimeId(showtime_id){
        return Booking.findByShowtimeId(showtime_id);
    }
    async create(booking){
        const showtime = await Showtime.findById(booking.showtime_id)
        const seats = await Seat.findByHallId(showtime.hall_id)
        const seatExist = seats.some(seat => seat.id == booking.seat_id)
        if (!seatExist)
            throw ApiError.BadRequest("Место не сущесвует")
        const check = Booking.findBy(booking.showtime_id, booking.seat_id)
        if (check)
            throw ApiError.BadRequest("Место занято")
        return Booking.create(booking);
    }
    async delete(id, user_id){
        const booking = await Booking.findById(id)
        if (!booking || booking.user_id != user_id)
            throw ApiError.BadRequest("Вы не бронировали это место")
        return Booking.delete(id);
    }
}

module.exports = new BookingService();
