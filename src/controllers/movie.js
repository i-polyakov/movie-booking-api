const movieService = require("../services/movie");

class MovieController {
    async getAll(req, res, next){
        try {
            const movies = await movieService.getAll();
            res.json(movies);
        }catch(err){
            next(err);
        }
    }
    async getOne(req, res, next){
        try {
            const movie = await movieService.getOne(req.params.id);
            res.json(movie);
        }catch(err){
            next(err);
        }
    }
    async create(req, res, next){
        //try {
            const { title, released, runtime, image_url, plot, relevant } = req.body;
            const createdMovie = await movieService.create({ title, released, runtime, image_url, plot, relevant });
            res.status(201).json(createdMovie);
        // }catch(err){
        //     next(err);
        // }
    }
}

module.exports = new MovieController();