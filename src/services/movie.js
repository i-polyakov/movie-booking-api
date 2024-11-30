const Movie = require("../repository/movie");

class MovieService {
    async getAll(){
        return Movie.findAll();
    }
    async getOne(id){
        return Movie.findById(id).then(movie => {
            if (!movie) return movie;
            // Вычисляем средний рейтинг и количество оценок
            const ratings = movie.Reviews.filter(review => review.rate !== null).map(review => review.rate);
            const averageRating = ratings.length ? (ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length).toFixed(1) : null;
            const reviewCount = ratings.length;
          
            if (averageRating !== null) 
                return {...movie.toJSON(), averageRating, reviewCount}
            return movie
        });
    }
    async create(movie, genreIds){
        const newMovie = await Movie.create(movie); // Создаем фильм
        // Добавляем жанры к фильму
        await newMovie.addGenres(genreIds); // genreIds - это массив ID жанров
    
        return newMovie
    }
    async update(id, relevant){
    
        return Movie.update( id, relevant);
    }
}

module.exports = new MovieService();
