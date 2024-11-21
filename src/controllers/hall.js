const hallService = require("../services/hall");

class HallController {
    async getAll(req, res, next){
        try {
            const halls = await hallService.getAll();
            res.json(halls);
        }catch(err){
            next(err);
        }
    }
}

module.exports = new HallController();