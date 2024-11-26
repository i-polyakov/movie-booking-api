const express = require('express');
const ReviewController = require('../controllers/review');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');
const validate = require('../middleware/validate');
const ReviewScheme = require('../schemes/review');

router.get('/', ReviewController.getByMovieId);
router.post('/', isAuthorized, validate(ReviewScheme.create), ReviewController.create);

module.exports = router;