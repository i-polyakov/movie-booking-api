const bookingService = require("../services/booking");

class BookingController {
    async getByShowtimeId(req, res, next) {
        try {
            const showtimeId = req.query.showtimeId
            if (!showtimeId) {
                return res.status(400).json({ error: 'Параметр showtimeId обязателен' });
            }
            const bookings = await bookingService.getByShowtimeId(showtimeId);
            res.json(bookings);
        } catch (err) {
            next(err);
        }
    }
    async create(req, res, next) {
        try {
            const { userId, showtimeId, seatId } = req.body;
            const created = await bookingService.create({ user_id: userId, showtime_id: showtimeId, seat_id: seatId });
            res.status(201).json(created);
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            const deleted = await bookingService.delete(req.params.id, req.user.id);
            res.status(200).json(deleted);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new BookingController();