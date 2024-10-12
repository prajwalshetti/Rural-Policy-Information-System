const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  benificiary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Benificiary",
    required: true,
  },
  policy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Policy",
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  applied_on: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", ApplicationSchema);

module.exports = Application;
