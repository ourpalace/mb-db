const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  uri: String,
  lyrics: String,


});

module.exports = mongoose.model('Song', songSchema);
