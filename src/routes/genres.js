const express = require('express');
const Genre = require('../models/genre');
const router = express.Router();

// Получить все жанры
router.get('/', async (req, res) => {
  const genres = await Genre.findAll();
  res.json(genres);
});

// Создать жанр
router.post('/', async (req, res) => {
  const { id, name } = req.body;
  const genre = await Genre.create({ id, name });
  res.status(201).json(genre);
});

module.exports = router;