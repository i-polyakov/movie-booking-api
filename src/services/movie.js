const Movie = require("../repository/movie");

class MovieService {
    async getAll(){
        return Movie.findAll();
    }
    async getOne(id){
        return Movie.findById(id);
    }
    async create(movie){
        return Movie.create(movie);
    }
    async update(id, relevant){
    
        return Movie.update( id, relevant);
    }
}

module.exports = new MovieService();
