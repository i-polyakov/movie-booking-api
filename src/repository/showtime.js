const Hall = require('../models/hall');
const Showtime = require('../models/showtime');

class ShowtimeRepository {

  async findByMovieId(movie_id) {
    return await Showtime.findAll({
    where:{ movie_id }, 
    order:[['show_date']],
    include: {
      model: Hall
    }});
  }

  async findById(id) {
    return await Showtime.findByPk(id, {
      include: {
        model: Hall
      }
    });
  }

  async findBy(movie_id, hall_id, show_date) {
    return await Showtime.findAll({
      where:{ movie_id, hall_id, show_date}})
  }
  
  async create(showtimeData) {
    return await Showtime.create(showtimeData);
  }
  
}

module.exports = new ShowtimeRepository();
