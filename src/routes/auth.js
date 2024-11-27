const express = require('express');
const AuthController = require('../controllers/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Авторизация
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     tags: [Auth]
 *     description: Вход в систему
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 description: Логин
 *                 maxLength: 20
 *               password:
 *                 type: string
 *                 description: Пароль
 *                 maxLength: 20
 *             
 *             required:
 *               - login
 *               - password
 *     responses:
 *       201:
 *         description: Возвращает токен и пользователя
 */
router.post('/login', AuthController.login);
/**
 * @swagger
 * /users/registration:
 *   post:
 *     tags: [Auth]
 *     description: Регистрация
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [login, password]
 *             properties:
 *               login:
 *                 type: string
 *                 example: new-user
 *                 description: Логин
 *                 maxLength: 20
 *            
 *               password:
 *                 type: string
 *                 example: 1234
 *                 description: Пароль
 *                 maxLength: 20
 *               
 *         
 *     responses:
 *       201:
 *         description:  Возвращает токен и пользователя
 */
router.post('/registration', AuthController.registration);

module.exports = router;