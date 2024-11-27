const ApiError = require("../errors/APIError");
const bookingService = require("../services/booking");

class BookingController {
    async getByShowtimeId(req, res, next) {
        try {
            const showtimeId = req.query.showtimeId
            if (!showtimeId) 
                throw ApiError.BadRequest("Параметр showtimeId обязателен")
            
            const bookings = await bookingService.getByShowtimeId(showtimeId);
            res.json(bookings);
        } catch (err) {
            next(err);
        }
    }
    async create(req, res, next) {
        try {
            const { showtimeId, seatId } = req.body;
            const created = await bookingService.create({ user_id: req.user.id, showtime_id: showtimeId, seat_id: seatId });
            res.status(201).json(created);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            if (!req.params.id || !req.user.id) 
                throw ApiError.BadRequest("Некорректный запрос")
            const deleted = await bookingService.delete(req.params.id, req.user.id);
            res.status(200).json(deleted);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new BookingController();