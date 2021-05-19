// =======================================
//
//          GET CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
// const async = require("async");
const router = express.Router();
const Emotion = require("../models/emotions");
const Bullet = require("../models/bullets");
const DougFeel = require("../models/dougfeels");
const Example = require("../models/examples");

// =========================
//      ROUTES
// =========================

//get all
router.get("/all", (req, res) => {
  Emotion.find({})
    .populate("dougExamples")
    .populate("bullets")
    .populate("example")
    .exec((err, emotions) => {
      if (err) {
        console.log(err);
      }
      res.json(emotions);
    });
});

//Get Emotion by name
router.get("/emotion/:emotionName", (req, res) => {
  Emotion.findOne({ name: req.params.emotionName })
    .populate("dougExamples")
    .populate("bullets")
    .populate("example")
    .exec((err, emotions) => {
      if (err) {
        console.log(err);
      }
      res.json(emotions);
    });
});
module.exports = router;
