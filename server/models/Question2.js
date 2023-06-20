const { Double } = require('bson');
const mongoose = require('mongoose');

const question2Schema = new mongoose.Schema({
  'Employed full-time': {
    type: Number,
    required: true
  },
  'Employed part-time': {
    type: Number,
    required: true
  },
  'Self-employed': {
    type: Number,
    required: true
  },
  'Unemployed': {
    type: Number,
    required: true
  },
  'Student': {
    type: Number,
    required: true
  },
  'Retired': {
    type: Number,
    required: true
  },
}, { collection: 'Question2' });

const Question2 = mongoose.model('Question2', question2Schema);

module.exports = Question2;
