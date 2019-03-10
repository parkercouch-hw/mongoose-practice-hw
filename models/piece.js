const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  image: String,
  birthyear: Number,
  deathyear: Number,
});

const pieceSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Untitled',
  },
  originCountry: String,
  image: String,
  museum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Museum',
  },
  creator: {
    creator: creatorSchema,
  },
});

module.exports = mongoose.model('Piece', pieceSchema);
