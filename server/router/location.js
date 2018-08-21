const express = require("express");
const router = express.Router();
const location = require("../controllers/location");
var auth = require("../config/auth.js")();

router.post("/", auth.authenticate(), location.post);

module.exports = router;
