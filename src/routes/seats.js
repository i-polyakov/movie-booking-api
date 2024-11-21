const express = require('express');
const SeatController = require('../controllers/seat');
const router = express.Router();

// Получить все места 
router.get('/', SeatController.getAll);
// Получить места в зале
router.get('/:hallId', SeatController.getByHallId);
module.exports = router;