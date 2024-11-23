const express = require('express');
const BookingController = require('../controllers/booking');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');

router.get('/', BookingController.getByShowtimeId);
router.post('/',isAuthorized, BookingController.create);
router.delete('/:id',isAuthorized, BookingController.delete);

module.exports = router;