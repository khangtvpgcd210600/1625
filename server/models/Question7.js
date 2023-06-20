const { Double } = require('bson');
const mongoose = require('mongoose');

const question7Schema = new mongoose.Schema({
  'Lack of knowledge/skills for repairs': {
    type: Number,
    required: true
  },
  'High repair costs': {
    type: Number,
    required: true
  },
  'Limited availability of repair services': {
    type: Number,
    required: true
  },
  'Lack of access to refurbished devices': {
    type: Number,
    required: true
  },
  'Perception that refurbished devices are of lower quality': {
    type: Number,
    required: true
  },
}, { collection: 'Question7' });

const Question7 = mongoose.model('Question7', question7Schema);

module.exports = Question7;
