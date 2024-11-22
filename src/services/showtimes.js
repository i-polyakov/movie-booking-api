const express = require('express');
const ShowtimeController = require('../controllers/showtime');
const router = express.Router();

router.get('/', ShowtimeController.getByMovieId);
router.get('/:id', ShowtimeController.getOne);
router.post('/', ShowtimeController.create);

module.exports = router;