const express = require('express');
const ShowtimeController = require('../controllers/showtime');
const isAdmin = require('../middleware/isAdmin');
const isAuthorized = require('../middleware/isAuthorized');
const validate = require('../middleware/validate');
const ShowtimeScheme = require('../schemes/showtime');
const router = express.Router();

router.get('/', ShowtimeController.getByMovieId);
router.get('/:id', ShowtimeController.getOne);
router.post('/',isAuthorized, isAdmin, validate(ShowtimeScheme.create), ShowtimeController.create);

module.exports = router;