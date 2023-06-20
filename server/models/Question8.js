const { Double } = require('bson');
const mongoose = require('mongoose');

const question8Schema = new mongoose.Schema({
  'Not important at all': {
    type: Number,
    required: true
  },
  'Slightly important': {
    type: Number,
    required: true
  },
  'Normal': {
    type: Number,
    required: true
  },
  'Important': {
    type: Number,
    required: true
  },
  'Extremely important': {
    type: Number,
    required: true
  },
}, { collection: 'Question8' });

const Question8 = mongoose.model('Question8', question8Schema);

module.exports = Question8;
