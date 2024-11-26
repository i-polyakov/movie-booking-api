const reviewService = require("../services/review");

class ReviewController {
    async getByMovieId(req, res, next) {
        try {
            const movieId = req.query.movieId
            if (!movieId) {
                return res.status(400).json({ error: 'Параметр movieId обязателен' });
            }
            const reviews = await reviewService.getByMovieId(movieId);
            res.json(reviews);
        } catch (err) {
            next(err);
        } 
    }
    async create(req, res, next) {
        try {
            const {movieId, rate, text } = req.body;
            const createdReview = await reviewService.create( { user_id: req.user.id, movie_id:movieId, text, rate });
            res.status(201).json(createdReview);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = new ReviewController();