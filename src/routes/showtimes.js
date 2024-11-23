const express = require('express');
const ShowtimeController = require('../controllers/showtime');
const isAdmin = require('../middleware/isAdmin');
const isAuthorized = require('../middleware/isAuthorized');
const router = express.Router();

router.get('/', ShowtimeController.getByMovieId);
router.get('/:id', ShowtimeController.getOne);
router.post('/',isAuthorized, isAdmin, ShowtimeController.create);

module.exports = router;