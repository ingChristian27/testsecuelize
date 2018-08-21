const express = require("express");
const router = express.Router();
const configuration = require("../controllers/configuration");
var auth = require("../config/auth.js")();
router.get("/", auth.authenticate(), configuration.get);

module.exports = router;
