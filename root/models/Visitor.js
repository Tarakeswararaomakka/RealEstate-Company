const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    property: { type: String, required: true }, // Property name
  },
  { timestamps: true }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
