const { Double } = require('bson');
const mongoose = require('mongoose');

const question3Schema = new mongoose.Schema({
  'Less than $25,000': {
    type: Number,
    required: true
  },
  '$25,000 - $49,999': {
    type: Number,
    required: true
  },
  '$50,000 - $74,999': {
    type: Number,
    required: true
  },
  '$75,000 - $99,999': {
    type: Number,
    required: true
  },
  '$100,000 - $149,999': {
    type: Number,
    required: true
  },
  '$150,000 or above': {
    type: Number,
    required: true
  },
}, { collection: 'Question3' });

const Question3 = mongoose.model('Question3', question3Schema);

module.exports = Question3;
