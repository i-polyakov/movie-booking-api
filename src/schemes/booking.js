const Joi = require("joi");

const BookingScheme = {
    create: Joi.object().keys(
      {
        showtimeId: Joi.number().required(),
        seatId: Joi.number().required()
      }
    )
}

module.exports = BookingScheme;
