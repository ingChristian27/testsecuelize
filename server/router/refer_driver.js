const express = require("express");
const router = express.Router();
const referDriver = require("../controllers/refer_driver");
var auth = require("../config/auth.js")();

router.post("/", auth.authenticate(), referDriver.post);

module.exports = router;
