const express = require('express');
const GenreController = require('../controllers/genre');
const router = express.Router();

// Получить все жанры
router.get('/', GenreController.getAll);

module.exports = router;