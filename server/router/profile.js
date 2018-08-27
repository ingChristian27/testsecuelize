const express = require("express");
const router = express.Router();
const profile = require("../controllers/profile");

var auth = require("../config/auth.js")();

router.post("/verify", auth.authenticate(), profile.verify);

module.exports = router;
