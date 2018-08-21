const express = require("express");
const router = express.Router();
const car = require("../controllers/car");
var auth = require("../config/auth.js")();
router

  .get("/", auth.authenticate(), car.get)

  .post("/", auth.authenticate(), car.post)

  .post("/add/:id", auth.authenticate(), car.postParams)

  .get("/info/:id", auth.authenticate(), car.getId);

module.exports = router;
