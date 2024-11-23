const express = require('express');
const ReviewController = require('../controllers/review');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');

router.get('/', ReviewController.getByMovieId);
router.post('/',isAuthorized, ReviewController.create);

module.exports = router;