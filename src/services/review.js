const Review = require("../repository/review");

class ReviewService {
    async getByMovieId(movie_id){
        return Review.findByMovieId(movie_id);
    }
    async create(review){
        return Review.create(review);
    }
}

module.exports = new ReviewService();
