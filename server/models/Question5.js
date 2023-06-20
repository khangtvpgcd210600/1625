const { Double } = require('bson');
const mongoose = require('mongoose');

const question5Schema = new mongoose.Schema({
  'Cost of repair/refurbishment': {
    type: Number,
    required: true
  },
  'Availability of new features': {
    type: Number,
    required: true
  },
  'Device performance issues': {
    type: Number,
    required: true
  },
  'Device compatibility with software updates': {
    type: Number,
    required: true
  },
  'Desire to experience the latest technology': {
    type: Number,
    required: true
  },
}, { collection: 'Question5' });

const Question5 = mongoose.model('Question5', question5Schema);

module.exports = Question5;
