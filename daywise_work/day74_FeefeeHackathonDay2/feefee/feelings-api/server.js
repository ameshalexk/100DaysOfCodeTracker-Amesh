// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
require("dotenv").config();

// =======================================
//              DATABASE
// =======================================
const dataBaseVar = process.env.DBNAME;
const mongoURI = process.env.MONGODB_URI + dataBaseVar;
const db = mongoose.connection;

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);
db.once("open", () => {
  console.log("mongo connected: ", mongoURI);
});
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// =======================================
//          CONTROLLERS
// =======================================
const postController = require("./controllers/post_controller");
app.use("/api", postController);
const getController = require("./controllers/get_controller");
app.use("/api", getController);

// =======================================
//              ROUTES
// =======================================

//Index
app.get("/", (req, res) => {
  res.render("index.ejs");
});
// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
