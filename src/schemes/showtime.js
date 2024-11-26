const Joi = require("joi");

const ShowtimeScheme = {
  create: Joi.object(
    {
      hallId: Joi.number().max(32767).required(),
      movieId: Joi.number().required(),
      show_date: Joi.date().required()
    }
  )
}

module.exports = ShowtimeScheme;
