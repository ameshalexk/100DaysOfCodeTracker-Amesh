const mongoose = require("mongoose");

const dougExampleSchema = new mongoose.Schema({
  body: { type: String, required: true },
});

const DougExample = mongoose.model("DougExample", dougExampleSchema);

module.exports = DougExample;
