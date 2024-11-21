const express = require('express');
const MovieController = require('../controllers/movie');
const router = express.Router();

// Получить все фильмы
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getOne);
// Создать фильм
router.post('/', MovieController.create);

module.exports = router;