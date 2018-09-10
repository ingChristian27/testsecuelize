const express = require("express");
const router = express.Router();
const valorations = require("../controllers/valoration");
var auth = require("../config/auth.js")();

router

  .post("/add", auth.authenticate(), valorations.add)

  .get("/:id/:type", auth.authenticate(), valorations.get)
  .put("/answer/:id", auth.authenticate(), valorations.putAnswer);

module.exports = router;
