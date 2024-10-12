const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String, 
    enum: ["Completed", "Partially Completed", "Incomplete"],
    default: "Incomplete",
    required:true,
  }
});

const Query = mongoose.model('Query', QuerySchema);

module.exports = Query;  
