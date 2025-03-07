const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  total_spending: { type: Number, default: 0 },
  visits: { type: Number, default: 0 },
  last_visit: { type: Date }
});

module.exports = mongoose.model('Customer', customerSchema);
