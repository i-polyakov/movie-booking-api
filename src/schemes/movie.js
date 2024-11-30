const Joi = require("joi");

const MovieScheme = {
  create: Joi.object(
    {
      title: Joi.string().trim().min(1).max(50).required(),
      released: Joi.date(),
      runtime: Joi.number().min(1).max(32767),
      image_url: Joi.string().uri({ scheme: ['http', 'https'] }).pattern(/\.(jpg|jpeg|png|gif|bmp|webp)$/i),  // Разрешает только http и https. Проверяет, что URL заканчивается на допустимое расширение изображения. 
      plot: Joi.string().trim(),
      relevant: Joi.boolean().default(true),
      genreIds: Joi.array().items(Joi.number())
    }
  ),
  hide: Joi.object(
    {
      relevant: Joi.boolean().required()
    })
}

module.exports = MovieScheme;
