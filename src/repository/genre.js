const Genre = require('../models/genre');

class GenreRepository {
  async findAll() {
    return await Genre.findAll();
  }
}

module.exports = new GenreRepository();
