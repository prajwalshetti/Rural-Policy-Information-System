const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true
  },
  reservation: {
    type: String,
    enum: ['SC', 'ST', 'OBC', 'General'],
    required: true
  },
  policy_type: {
    type: String,
    default: 'Education',
  },
  application_mode: {
    type: String,
    default: 'Offline',
  },
  family_size: {
    type: Number,
    default: 0,
  },
  marital_status: {
    type: Boolean,
    default: false,
  },
  disability: {
    type: Boolean,
    default: false,
  },
  aadhar_status: {
    type: Boolean,
    default: false,
  },
  pan_status: {
    type: Boolean,
    default: false,
  },
  voterid_status: {
    type: Boolean,
    default: false,
  },
  rentagreement_status: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  }
});

const Policy = mongoose.model('Policy', PolicySchema);

module.exports = Policy;  
