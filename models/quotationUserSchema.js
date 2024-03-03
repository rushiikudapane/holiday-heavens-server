const mongoose = require("mongoose");

const quotationUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    mailid: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    destinationName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QuotationUser", quotationUserSchema);
