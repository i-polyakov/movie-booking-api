const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

// Получить все фильмы
router.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
});

// Создать фильм
router.post('/', async (req, res) => {
  const { id, title, released, runtime, image_url, plot, relevant } = req.body;
  const movie = await Movie.create({ id, title, released, runtime, image_url, plot, relevant });
  res.status(201).json(movie);
});

module.exports = router;