const Movie = require('../models/movie');
const Genre = require('../models/genre');
const Review = require('./review');
const User = require('./user');
const Seat = require('./seat');
const Hall = require('./hall');
const Showtime = require('./showtime');
const Booking = require('./booking');

Review.belongsTo(User, { foreignKey: 'user_id'});
User.hasMany(Review, { foreignKey: 'user_id' });
Movie.hasMany(Review, { foreignKey: 'movie_id' });

Seat.belongsTo(Hall, { foreignKey: 'hall_id'});
Showtime.belongsTo(Hall, { foreignKey: 'hall_id'});
Showtime.belongsTo(Movie, { foreignKey: 'movie_id'});

Showtime.hasMany(Booking, { foreignKey: 'showtime_id'});
Booking.belongsTo(User, { foreignKey: 'user_id'});
Booking.belongsTo(Seat, { foreignKey: 'seat_id'});


Genre.belongsToMany(Movie, {
    through: 'movies_genres',
    foreignKey: 'genre_id',
    otherKey: 'movie_id',
  });

Movie.belongsToMany(Genre, {
    through: 'movies_genres', 
    foreignKey: 'movie_id',
    otherKey: 'genre_id',
  });