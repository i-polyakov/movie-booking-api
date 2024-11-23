const ApiError = require("../errors/APIError");

module.exports = function (err, req, res, next) {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({})
    }
    
}