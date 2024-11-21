const genreService = require("../services/genre");

class GenreController {
    async getAll(req, res, next){
        try {
            const genres = await genreService.getAll();
            res.json(genres);
        }catch(err){
            next(err);
        }
    }
}

module.exports = new GenreController();