const seatService = require("../services/seat");

class SeatController {
    async getByHallIdOrAll(req, res, next){
        try {
            const seats = await req.query.hallId ? seatService.getByHallId(req.query.hallId) : seatService.getAll()
            res.json(seats);
        }catch(err){
            next(err);
        }
    }
}

module.exports = new SeatController();