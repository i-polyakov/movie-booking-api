const seatService = require("../services/seat");

class SeatController {
    async getAll(req, res, next){
        try {
            const seats = await seatService.getAll();
            res.json(seats);
        }catch(err){
            next(err);
        }
    }
    async getByHallId(req, res, next){
        try {
            const seats = await seatService.getByHallId(req.params.hallId);
            res.json(seats);
        }catch(err){
            next(err);
        }
    }
}

module.exports = new SeatController();