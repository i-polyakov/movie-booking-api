const express = require('express');
const BookingController = require('../controllers/booking');
const router = express.Router();

router.get('/', BookingController.getByShowtimeId);
router.post('/', BookingController.create);
router.delete('/:id', BookingController.delete);

module.exports = router;