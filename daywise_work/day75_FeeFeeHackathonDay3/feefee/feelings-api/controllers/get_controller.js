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
const pool = require("../models/db");
const format = require("pg-format");
// =========================
//      ROUTES
// =========================

//get all
/* router.get("/all", (req, res) => {
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
}); */

//Get Emotion by name
/* router.get("/emotion/:emotionName", (req, res) => {
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
}); */

//Get all Emotions
router.get("/all", async (req, res) => {
  try {
    let emotions = await pool.query(
      "SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = examples.emotion_id JOIN char_examples ON char_examples.emotion_id = bullets.emotion_id"
    );
    res.json(emotions);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});

//Get Single Emotion

router.get("/emotion/:emotionID", async (req, res) => {
  try {
    let emotion = await pool.query(
      " SELECT * FROM emotions JOIN examples ON examples.emotion_id = emotions.emotion_id JOIN bullets ON bullets.emotion_id = examples.emotion_id JOIN char_examples ON char_examples.emotion_id = bullets.emotion_id WHERE emotions.emotion_id = $1",
      [req.params.emotionID]
    );
    res.json(emotion);
  } catch (err) {
    console.log(err);
    res.send("500 Error");
  }
});
module.exports = router;
