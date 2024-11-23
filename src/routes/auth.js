const express = require('express');
const AuthController = require('../controllers/auth');
const router = express.Router();

// router.get('/', ShowtimeController.getByMovieId);
// router.get('/:id', ShowtimeController.getOne);
router.post('/', AuthController.registration);

module.exports = router;