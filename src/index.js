const express = require("express");
// const loader = require("./loader");
const bodyParser = require('body-parser');
require('dotenv').config();
const DataBase = require("./database");
// const port = require("./config").app.port;
// const mongoPort = require("./config").app.mongoPort;
const app = express();
// const cronJob = require("cron").CronJob;
// const service = require("../src/services/user");
const genresRouter = require('./routes/genres');
const moviesRouter = require('./routes/movies');
const hallsRouter = require('./routes/halls');
const seatsRouter = require('./routes/seats');
const reviewsRouter = require('./routes/reviews');
const showtimesRouter = require('./routes/showtimes');
const bookingsRouter = require('./routes/bookings');
const authRouter = require('./routes/auth');

// app.use(loader);
app.use(bodyParser.json());

app.use('/api/genres', genresRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/halls', hallsRouter);
app.use('/api/seats', seatsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/showtimes', showtimesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/users', authRouter);


const PORT = process.env.PORT || 3000;
async function start(){

    await DataBase.connect();

    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    
    // new cronJob('* */5 * * * *', service.automaticDelete).start();
}

start();

module.exports = app;
