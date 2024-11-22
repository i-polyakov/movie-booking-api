const express = require('express');
const ReviewController = require('../controllers/review');
const router = express.Router();


router.get('/', ReviewController.getByMovieId);
router.post('/', ReviewController.create);

module.exports = router;