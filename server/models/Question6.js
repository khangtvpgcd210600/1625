const { Double } = require('bson');
const mongoose = require('mongoose');

const question6Schema = new mongoose.Schema({
  'Yes, to save money': {
    type: Number,
    required: true
  },
  'Yes, to reduce electronic waste': {
    type: Number,
    required: true
  },
  'No, because I believe repairs are not reliable': {
    type: Number,
    required: true
  },
  "No, because it's more convenient to replace": {
    type: Number,
    required: true
  },
}, { collection: 'Question6' });

const Question6 = mongoose.model('Question6', question6Schema);

module.exports = Question6;
