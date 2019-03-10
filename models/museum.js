const mongoose = require('mongoose');

const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
  country: String,
  image: String,
});

module.exports = mongoose.model('Museum', museumSchema);
