const express = require('express');
const ShowtimeController = require('../controllers/showtime');
const isAdmin = require('../middleware/isAdmin');
const isAuthorized = require('../middleware/isAuthorized');
const validate = require('../middleware/validate');
const ShowtimeScheme = require('../schemes/showtime');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Showtimes
 *     description: Сеансы фильмов
 */

/**
 * @swagger
 * /showtimes:
 *   get:
 *     description: Получить все сеансы на фильм
 *     tags: [Showtimes]
 *     parameters:
 *       - in: query
 *         name: movieId
 *         description: ID фильма
 *         required: true
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: Возвращает массив сеансов
 */
router.get('/', ShowtimeController.getByMovieId);
/**
 * @swagger
 * /showtimes/{id}:
 *   get:
 *     description: Получить сеанс по id
 *     tags: [Showtimes]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID сеанса
 *         required: true
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: Возвращает сеанс
 */
router.get('/:id', ShowtimeController.getOne);
/**
 * @swagger
 * /showtimes:
 *   post:
 *     security:              
 *       - JWT: []
 *     description: Создать сеанс на фильм (только админ)
 *     tags: [Showtimes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [hallId, movieId, show_date]
 *             properties:
 *               hallId:
 *                 type: integer
 *                 example: 1
 *                 description: ID зала
 *                 
 *               movieId:
 *                 type: integer
 *                 example: 2
 *                 description: ID фильма
 *                 
 *               show_date:
 *                 type: date
 *                 example: 2024-11-30 15:30
 *                 description: Дата и время показа
 *         
 *     responses:
 *       201:
 *         description: Возвращает созданный сеанс
 */
router.post('/',isAuthorized, isAdmin, validate(ShowtimeScheme.create), ShowtimeController.create);

module.exports = router;