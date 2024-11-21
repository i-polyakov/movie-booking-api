const Genre = require("../repository/genre");

class GenreService {
    async getAll(){
        return Genre.findAll();
    }
}

module.exports = new GenreService();
