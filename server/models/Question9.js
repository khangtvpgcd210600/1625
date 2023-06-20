const { Double } = require('bson');
const mongoose = require('mongoose');

const question9Schema = new mongoose.Schema({
  'Yes, definitely': {
    type: Number,
    required: true
  },
  'Maybe, depending on the program/event': {
    type: Number,
    required: true
  },
  'No, I would not be interested': {
    type: Number,
    required: true
  },
}, { collection: 'Question9' });

const Question9 = mongoose.model('Question9', question9Schema);

module.exports = Question9;
