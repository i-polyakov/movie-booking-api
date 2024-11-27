const express = require('express');
const MovieController = require('../controllers/movie');
const isAuthorized = require('../middleware/isAuthorized');
const isAdmin = require('../middleware/isAdmin');
const validate = require('../middleware/validate');
const MovieScheme = require('../schemes/movie');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Movies
 *     description: Фильмы
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     description: Получить все фильмы
 *     tags: [Movies]
 *        
 *     responses:
 *       200:
 *         description: Возвращает массив фильмов
 */
// Получить все фильмы
router.get('/' , MovieController.getAll);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     description: Получить фильм по id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID фильма
 *         schema:
 *           type: integer
 * 
 *     responses:
 *       200:
 *         description: Возвращает один фильм
 */
router.get('/:id', MovieController.getOne);
/**
 * @swagger
 * /movies:
 *   post:
 *     security:              
 *       - JWT: []
 *     description: Создать фильм (только админ)
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Название фильма 
 *                 description: Название фильма
 *                 maxLength: 50
 *                 minLength: 1
 *               released:
 *                 type: date
 *                 example: 2024-01-12
 *                 description: Дата выхода фильма
 *                 maxLength: 50
 *                 minLength: 1
 *               runtime:
 *                 type: integer
 *                 example: 132
 *                 description: Продолжительность фиьльма в минутах
 *                 minimum: 1
 *               image_url:
 *                 type: string
 *                 example: "https://i.pinimg.com/736x/75/3b/db/753bdb99878721343ca0ece0a1a05cb9.jpg"
 *                 description: Ссылка на постер
 *                 format: uri
 *               plot:
 *                 type: string
 *                 example: Завязка фильма
 *                 description: Завязка фильма (описание)
 *         
 *     responses:
 *       201:
 *         description: Возвращает созданный фильм
 */
// Создать фильм
router.post('/',isAuthorized, isAdmin, validate(MovieScheme.create), MovieController.create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     security:              
 *       - JWT: []
 *     description: Скрыть/Показать фильм (только админ)
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID фильма
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:  
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               relevant:
 *                 type: bool
 *                 example: false
 *                 description: Состояние фильма
 *         
 *     responses:
 *       201:
 *         description: Возвращает 1 если операция выполнена
 */
// Скрыть/Показать фильм
router.put('/:id',isAuthorized, isAdmin, validate(MovieScheme.hide), MovieController.setRelevance);
module.exports = router;