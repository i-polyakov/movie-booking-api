const express = require('express');
const MovieController = require('../controllers/movie');
const router = express.Router();

// Получить все фильмы
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getOne);
// Создать фильм
router.post('/', MovieController.create);
// Скрыть/Показать фильм
router.put('/:id', MovieController.setRelevance);
module.exports = router;