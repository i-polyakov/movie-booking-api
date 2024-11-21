const Movie = require("../repository/movie");

class MovieService {
    async getAll(){
        return Movie.findAll();
    }
    async getOne(id){
        return Movie.findById(id);
    }
    async create(movie){
        console.log(movie);
        // const date = moment(dateString).utc().format('YYYY-MM-DD HH:mm:ss');
        // const movie = [...movie, released: ]
        return Movie.create(movie);
    }
}

module.exports = new MovieService();
