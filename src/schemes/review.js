const Joi = require("joi");

const ReviewScheme = {
  create: Joi.object(
    {
      movieId: Joi.number().required(),
      rate: Joi.number().min(1).max(10),
      text: Joi.string().trim().min(1).max(300).required()
    }
  )
}

module.exports = ReviewScheme;
