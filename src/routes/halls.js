const express = require('express');
const HallHController = require('../controllers/hall');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Halls
 *     description: Залы кинотеатра
 */

/**
 * @swagger
 * /halls:
 *   get:
 *     description: Получить все залы кинотеатра
 *     tags: [Halls]
 *        
 *     responses:
 *       200:
 *         description: Возвращает массив залов
 */
// Получить все залы
router.get('/', HallHController.getAll);

module.exports = router;