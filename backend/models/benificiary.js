const mongoose = require('mongoose');

const BenificarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  reservation: {
    type: String,
    enum: ['SC', 'ST', 'OBC', 'General'],
    default: 'General'
  },
  phoneNo: {
    type: Number,
    required: false
  },
  state: {
    type: String,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  village: {
    type: String,
    required: false
  },
  family_size: {
    type: Number,
    default: 1
  },
  marital_status: {
    type: Boolean,
    default: false,
  },
  disability: {
    type: Boolean,
    default: false
  },
  aadhar_status: {
    type: Boolean,
    default: false
  },
  pan_status: {
    type: Boolean,
    default: false
  },
  voterid_status: {
    type: Boolean,
    default: false
  },
  rentagreement_status: {
    type: Boolean,
    default: false
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application'
    }
  ],
});

const Benificiary = mongoose.model('Benificiary', BenificarySchema);

module.exports = Benificiary;
