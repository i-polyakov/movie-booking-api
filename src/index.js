const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require("swagger-jsdoc");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const DataBase = require("./database");
const errorMiddleware = require('./middleware/errorMiddleware')
const httpLogger = require("./middleware/httpLogger");

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
app.use(httpLogger)

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

// URL для подключения к БД
const url = 'mongodb://localhost:27017/logs';


async function start(){
  
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Успешное подключение к MongoDB');
    
    await DataBase.connect();
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
}

start();

module.exports = app;
