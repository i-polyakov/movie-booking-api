const Movie = require('../models/movie');

class MovieRepository {

  async findAll() {
    return await Movie.findAll();
  }

  async findById(id) {
    return await Movie.findByPk(id);
  }

  async create(movieData) {
    return await Movie.create(movieData);
  }
}

module.exports = new MovieRepository();
