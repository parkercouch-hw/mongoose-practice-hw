// Require mongoose node module
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/museumexplorer',
  { useNewUrlParser: true },
);

module.exports.Museum = require('./museum');
module.exports.Piece = require('./piece');
