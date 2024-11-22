const Showtime = require("../repository/showtime");

class ShowtimeService {
    async getByMovieId(movie_id){
        return Showtime.findByMovieId(movie_id);
    }
    async getOne(id){
        return Showtime.findById(id);
    }
    async create(showtime){
        return Showtime.create(showtime);
    }
}

module.exports = new ShowtimeService();
