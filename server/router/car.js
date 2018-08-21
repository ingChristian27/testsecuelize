const express = require("express");
const router = express.Router();
const car = require("../controllers/car");
var auth = require("../config/auth.js")();
router

  .get("/", auth.authenticate(), car.get)

  .post("/", car.post)

  .post("/add/:id", car.postParams)

  .get("/info/:id", car.getId);

module.exports = router;
