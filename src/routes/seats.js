const express = require('express');
const SeatController = require('../controllers/seat');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Seats
 *     description: Места в залах
 */

/**
 * @swagger
 * /seats:
 *   get:
 *     description: Получить все места в зале или во всех залах
 *     tags: [Seats]
 *     parameters:
 *       - in: query
 *         name: hallId
 *         description: ID зала
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: Возвращает массив мест
 */
// Получить места в зале
router.get('/', SeatController.getByHallIdOrAll);

module.exports = router;