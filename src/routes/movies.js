const express = require('express');
const MovieController = require('../controllers/movie');
const isAuthorized = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();


// Получить все фильмы
router.get('/' , MovieController.getAll);
router.get('/:id', MovieController.getOne);
// Создать фильм
router.post('/',isAuthorized, isAdmin, MovieController.create);
// Скрыть/Показать фильм
router.put('/:id',isAuthorized, isAdmin, MovieController.setRelevance);
module.exports = router;