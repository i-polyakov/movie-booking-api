const Genre = require('../models/genre');
const Movie = require('../models/movie');
const Review = require('../models/review');

class MovieRepository {

  async findAll() {
    return await Movie.findAll({
      include: {
        model: Genre,
        through: {
          attributes: [] // Это уберет промежуточные поля, если они не нужны
        }
      }
    });
  }

  async findById(id) {
    return await Movie.findByPk(id, {
      include: [{
        model: Genre,
        through: {
          attributes: [] // Это уберет промежуточные поля, если они не нужны
        }
      },
      {
        model: Review, // Включаем модель Review
        attributes: ['rate'], // Включаем только поле rating
      }]

    });
  }

  async create(movieData) {
    return await Movie.create(movieData);
  }

  async update(id, relevant) {
    return await Movie.update({ relevant }, { where: { id } });
  }
}

module.exports = new MovieRepository();
