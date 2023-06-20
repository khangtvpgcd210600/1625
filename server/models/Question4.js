const { Double } = require('bson');
const mongoose = require('mongoose');

const question4Schema = new mongoose.Schema({
  'Less than once a year': {
    type: Number,
    required: true
  },
  'Once a year': {
    type: Number,
    required: true
  },
  'Every 2-3 years': {
    type: Number,
    required: true
  },
  'Every 4-5 years': {
    type: Number,
    required: true
  },
  'Rarely or never': {
    type: Number,
    required: true
  },
}, { collection: 'Question4' });

const Question4 = mongoose.model('Question4', question4Schema);

module.exports = Question4;
