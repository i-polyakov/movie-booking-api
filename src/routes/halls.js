const express = require('express');
const HallHController = require('../controllers/hall');
const router = express.Router();

// Получить все залы
router.get('/', HallHController.getAll);

module.exports = router;