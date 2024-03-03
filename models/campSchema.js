const mongoose = require("mongoose");

const campSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  actualVegPrice: {
    type: String,
    required: true,
  },
  discountedVegPrice: {
    type: String,
    required: true,
  },
  actualNonVegPrice: {
    type: String,
    required: true,
  },
  discountedNonVegPrice: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("camp", campSchema);
