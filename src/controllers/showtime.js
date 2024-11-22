const showtimeService = require("../services/showtime");

class ShowtimeController {
    async getByMovieId(req, res, next) {
        try {
            const movieId = req.query.movieId
            if (!movieId) {
                return res.status(400).json({ error: 'Параметр movieId обязателен' });
            }
            const showtimes = await showtimeService.getByMovieId(movieId);
            res.json(showtimes);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
    async getOne(req, res, next) {
        try {
            const showtime = await showtimeService.getOne(req.params.id);
            res.json(showtime);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
    async create(req, res, next) {
        try {
            const { hallId, movieId, show_date } = req.body;
            const created = await showtimeService.create({ hall_id: hallId, movie_id: movieId, show_date });
            res.status(201).json(created);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new ShowtimeController();