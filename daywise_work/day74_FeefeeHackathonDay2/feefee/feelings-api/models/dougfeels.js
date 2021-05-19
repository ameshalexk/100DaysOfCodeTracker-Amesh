const mongoose = require("mongoose");

const dougfeelSchema = new mongoose.Schema({
  body: { type: String, required: true },
});

const Dougfeel = mongoose.model("Dougfeel", dougfeelSchema);

module.exports = Dougfeel;
