const express = require('express');
const MovieController = require('../controllers/movie');
const isAuthorized = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');
const validate = require('../middleware/validate');
const MovieScheme = require('../schemes/movie');

const router = express.Router();


// Получить все фильмы
router.get('/' , MovieController.getAll);
router.get('/:id', MovieController.getOne);
// Создать фильм
router.post('/',isAuthorized, isAdmin, validate(MovieScheme.create), MovieController.create);
// Скрыть/Показать фильм
router.put('/:id',isAuthorized, isAdmin, validate(MovieScheme.hide), MovieController.setRelevance);
module.exports = router;