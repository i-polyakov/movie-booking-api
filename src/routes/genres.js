const express = require('express');
const GenreController = require('../controllers/genre');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Genres
 *     description: Жанры
 */

/**
 * @swagger
 * /genres:
 *   get:
 *     description: Получить все жанры фильмов
 *     tags: [Genres]
 *        
 *     responses:
 *       200:
 *         description: Возвращает массив жанров
 */
// Получить все жанры
router.get('/', GenreController.getAll);

module.exports = router;