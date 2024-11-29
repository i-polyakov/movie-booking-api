const Review = require('../models/review');
const User = require('../models/user');

class ReviewRepository {

  async findByMovieId(movie_id) {
    return await Review.findAll({
      where:{ movie_id }, order:[['create_at','DESC']],
      include: {
        model: User
      }
    });
  }
  
  async create(reviewData) {
    return await Review.create(reviewData);
  }
}

module.exports = new ReviewRepository();
