const express = require('express');
const BookingController = require('../controllers/booking');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');
const BookingScheme = require('../schemes/booking');
const validate = require('../middleware/validate');

router.get('/', BookingController.getByShowtimeId);
router.post('/',isAuthorized, validate(BookingScheme.create), BookingController.create);
router.delete('/:id',isAuthorized, BookingController.delete);

module.exports = router;