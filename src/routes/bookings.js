const express = require('express');
const BookingController = require('../controllers/booking');
const router = express.Router();
const isAuthorized = require('../middleware/isAuthorized');
const BookingScheme = require('../schemes/booking');
const validate = require('../middleware/validate');
/**
 * @swagger
 * tags:
 *   - name: Bookings
 *     description: Бронирования
 */

/**
 * @swagger
 * /bookings:
 *   get:
 *     description: Забронированные места на сеанс
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: showtimeId
 *         required: true
 *         description: ID сеанса
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: Возвращает забронированные места на сеанс
 */
router.get('/', BookingController.getByShowtimeId);

/**
 * @swagger
 * /bookings:
 *   post:
 *     security:              
 *       - JWT: []
 *     description: Забронировать место на сеанс
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [showtimeId, seatId]
 *             properties:
 *               showtimeId:
 *                 type: integer
 *                 example: 1
 *                 description: ID сеанса
 *            
 *               seatId:
 *                 type: integer
 *                 example: 2
 *                 description: ID места
 *        
 *     responses:
 *       201:
 *         description: Возвращает забронированное место на сеанс
 */
router.post('/',isAuthorized, validate(BookingScheme.create), BookingController.create);
/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     security:              
 *       - JWT: []
 *     description: Удалить бронирование
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID бронирования
 *         schema:
 *          type: integer
 *        
 *     responses:
 *       200:
 *         description: 1 если запись удалена
 */
router.delete('/:id',isAuthorized, BookingController.delete);

module.exports = router;