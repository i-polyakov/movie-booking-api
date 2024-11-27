const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require("swagger-jsdoc");
const bodyParser = require('body-parser');

require('dotenv').config();
const DataBase = require("./database");
const errorMiddleware = require('./middleware/errorMiddleware')

// const mongoPort = require("./config").app.mongoPort;

const genresRouter = require('./routes/genres');
const moviesRouter = require('./routes/movies');
const hallsRouter = require('./routes/halls');
const seatsRouter = require('./routes/seats');
const reviewsRouter = require('./routes/reviews');
const showtimesRouter = require('./routes/showtimes');
const bookingsRouter = require('./routes/bookings');
const authRouter = require('./routes/auth');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'movie-booking-api',
      version: '1.0.0',
    },
    host: `http://localhost:${PORT}`,
    servers: [{ url: '/api' }],
    components: {
        securitySchemes: {
          JWT: {
            description: 'Bearer token using a JWT',
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
  },
  apis: ['./src/routes/*.js'],
}
const swaggerDoc = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/api/genres', genresRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/halls', hallsRouter);
app.use('/api/seats', seatsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/showtimes', showtimesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/users', authRouter);
app.use(errorMiddleware)


async function start(){
    await DataBase.connect();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}

start();

module.exports = app;
