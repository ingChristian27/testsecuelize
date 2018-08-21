const express = require("express");
const router = express.Router();
const saved = require("../controllers/saved_location");
var auth = require("../config/auth.js")();

router

  .get("/:id", auth.authenticate(), saved.get)

  .post("/", auth.authenticate(), saved.post);

module.exports = router;
