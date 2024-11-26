const ApiError = require("../errors/APIError");
const Hall = require("../repository/hall");
const Movie = require("../repository/movie");
const Showtime = require("../repository/showtime");

class ShowtimeService {
    async getByMovieId(movie_id){
        return Showtime.findByMovieId(movie_id);
    }
    async getOne(id){
        return Showtime.findById(id);
    }
    async create(showtime){
        const hall = await Hall.findOne(showtime.hall_id)
        if (!hall)
            throw ApiError.BadRequest("Зал не сущесвует")
        const movie = await Movie.findById(showtime.movie_id)
        if (!movie)
            throw ApiError.BadRequest("Фильм не сущесвует")
        const showtimes = await Showtime.findBy(showtime.movie_id, showtime.hall_id, showtime.show_date);
        if (showtimes.length > 0)
            throw ApiError.BadRequest("Сеанс на это время уже есть")
        return Showtime.create(showtime);
    }
}

module.exports = new ShowtimeService();
