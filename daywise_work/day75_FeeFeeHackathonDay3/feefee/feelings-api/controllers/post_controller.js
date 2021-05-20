// =======================================
//
//          POST CONTROLLER
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

const DougExample = require("../models/doug_examples");
const Example = require("../models/examples");

// =========================
//      ROUTES
// =========================
//Create Emotion

router.post("/emotion", (req, res) => {
  Emotion.create(req.body, (err, createdEmotion) => {
    console.log(
      `This is the emotion you just created ==================================${createdEmotion}================================================`
    );
    res.redirect("/api/all");
  });
});

//Create Example
router.post("/:emotionID/example", (req, res) => {
  Emotion.findById(req.params.emotionID, (err, foundEmotion) => {
    Example.create(req.body, (err, createdExample) => {
      foundEmotion.example.push(createdExample);
      foundEmotion.save((err, data) => {
        res.redirect("/api/all");
      });
    });
  });
});

//Create Bullet
router.post("/:emotionID/bullet", (req, res) => {
  Emotion.findById(req.params.emotionID, (err, foundEmotion) => {
    Bullet.create(req.body, (err, createdBullet) => {
      foundEmotion.bullets.push(createdBullet);
      foundEmotion.save((err, data) => {
        res.json(foundEmotion);
      });
    });
  });
});

//Create DougExample
router.post("/:emotionID/dougexample", (req, res) => {
  Emotion.findById(req.params.emotionID, (err, foundEmotion) => {
    DougExample.create(req.body, (err, createdDougExample) => {
      foundEmotion.dougExamples.push(createdDougExample);
      foundEmotion.save((err, data) => {
        res.json(foundEmotion);
      });
    });
  });
});

module.exports = router;
