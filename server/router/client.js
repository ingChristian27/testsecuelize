const express = require("express");
const router = express.Router();
const client = require("../controllers/client");
var auth = require("../config/auth.js")();

router.get("/", auth.authenticate(), client.get);

module.exports = router;
