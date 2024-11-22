const Review = require('../models/review');

class ReviewRepository {

  async findByMovieId(movie_id) {
    return await Review.findAll({where:{ movie_id }, order:[['create_at','DESC']]});
  }
  
  async create(reviewData) {
    return await Review.create(reviewData);
  }
}

module.exports = new ReviewRepository();
