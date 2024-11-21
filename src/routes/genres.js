const express = require('express');
const Genre = require('../models/genre');
const Movie = require('../models/movie');
const router = express.Router();

// Получить все жанры
router.get('/', async (req, res) => {
  const genres = await Genre.findAll({
    include: {
      model: Movie,
      through: {
        attributes: [] // Это уберет промежуточные поля, если они не нужны
      }
    }
  });
  res.json(genres);
});

// Создать жанр
router.post('/', async (req, res) => {
  const { id, name } = req.body;
  const genre = await Genre.create({ id, name });
  res.status(201).json(genre);
});

module.exports = router;