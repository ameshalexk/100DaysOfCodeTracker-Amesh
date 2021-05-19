const mongoose = require("mongoose");

const bulletSchema = new mongoose.Schema({
  body: { type: String, required: true },
});

const Bullet = mongoose.model("Bullet", bulletSchema);

module.exports = Bullet;
