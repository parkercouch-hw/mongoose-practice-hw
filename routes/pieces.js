const express = require('express');

const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  db.Piece.find()
    .populate('museum')
    .then((pieces) => {
      // res.send(pieces);
      return res.render('pieces/index', { pieces });
    })
    .catch((err) => {
      console.log('Error in GET /pieces route:', err);
      return res.status(500).render('error');
    });
});

router.post('/', async (req, res) => {
  try {
    await db.Piece.create({
      name: req.body.name,
      originCountry: req.body.originCountry,
      image: req.body.image,
      museum: req.body.museum,
      creator: {
        firstname: req.body.creatorFirstName,
        lastname: req.body.creatorLastName,
        image: req.body.creatorImage,
        birthyear: req.body.creatorBirthYear,
        deathyear: req.body.creatorDeathYear,
      },
    });

    return res.redirect('/pieces');
  } catch (error) {
    return res.status(500).render('error', error);
  }
});

router.get('/new', async (req, res) => {
  try {
    const museums = await db.Museum.find() || [];
    return res.render('pieces/new', { museums });
  } catch (error) {
    return res.status(500).render('error', error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const piece = await db.Piece.findById(req.params.id).populate('Museum');
    if (!piece) {
      return res.redirect('/pieces');
    }
    return res.render('pieces/show', { piece });
  } catch (error) {
    return res.status(500).render('error', error);
  }
});

module.exports = router;
