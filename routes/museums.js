const express = require('express');

const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const museums = await db.Museum.find() || [];
    return res.render('museums/index', { museums });
  } catch (error) {
    return res.render('error', { error });
  }
});

router.post('/', async (req, res) => {
  // TODO: find or create
  try {
    await db.Museum.create(req.body);
    return res.redirect('/museums');
  } catch (error) {
    return res.render('error', { error });
  }
});

router.get('/new', (req, res) => {
  res.render('museums/new');
});

router.get('/:id', async (req, res, next) => {
  try {
    const museum = await db.Museum.findById(req.params.id);

    if (!museum) {
      // return res.status(404).render('error', { message: 'No museum found' });
      return next(new Error('No Museum Found'));
    }

    museum.pieces = await db.Piece.find({ museum: req.params.id }) || [];

    return res.render('museums/show', { museum });
  } catch (error) {
    console.log('Error in GET /museum/:id route:', error);
    // return res.status(500).render('error');
    return next(error);
  }
});

module.exports = router;
