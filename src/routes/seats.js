const express = require('express');
const SeatController = require('../controllers/seat');
const router = express.Router();

// Получить места в зале
router.get('/', SeatController.getByHallIdOrAll);

module.exports = router;