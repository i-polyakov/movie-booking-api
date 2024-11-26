const ApiError = require("../errors/APIError");

module.exports = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    next(ApiError.Forbidden());
  }
};
