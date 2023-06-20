const { Double } = require('bson');
const mongoose = require('mongoose');

const question1Schema = new mongoose.Schema({
  '18-29': {
    type: Number,
    required: true
  },
  '30-44': {
    type: Number,
    required: true
  },
  '45-59': {
    type: Number,
    required: true
  },
  '60+': {
    type: Number,
    required: true
  },
}, { collection: 'Question1' });

const Question1 = mongoose.model('Question1', question1Schema);

module.exports = Question1;
