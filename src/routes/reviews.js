const express = require('express');
const ReviewController = require('../controllers/review');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');
const validate = require('../middleware/validate');
const ReviewScheme = require('../schemes/review');

/**
 * @swagger
 * tags:
 *   - name: Reviews
 *     description: Отзывы
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     description: Получить все отзывы на фильм
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: movieId
 *         required: true
 *         description: ID фильма
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: Возвращает отзывы на фильм
 */
router.get('/', ReviewController.getByMovieId);

/**
 * @swagger
 * /reviews:
 *   post:
 *     security:              
 *       - JWT: []
 *     description: Оставить отзыв на фильм
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [movieId, text]
 *             properties:
 *               movieId:
 *                 type: integer
 *                 example: 1
 *                 description: ID фильма
 *               text:
 *                 type: string
 *                 example: Текст отзыва 
 *                 description: Текст отзыва
 *                 maxLength: 300
 *                 minLength: 1
 *               rate: 
 *                 type: integer
 *                 example: 7
 *                 description: Оценка фильма
 *                 minimum: 1
 *                 maximum: 10
 *     responses:
 *       201:
 *         description: Возвращает отзыв
 */
router.post('/', isAuthorized, validate(ReviewScheme.create), ReviewController.create);

module.exports = router;