const Seat = require("../repository/seat");

class SeatService {
    async getAll(){
        return Seat.findAll();
    }
    async getByHallId(hall_id){
        return Seat.findByHallId(hall_id);
    }
}

module.exports = new SeatService();
