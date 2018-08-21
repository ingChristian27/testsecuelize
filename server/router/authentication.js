const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authentication");
var auth = require("../config/auth.js")();

router.post("/", auth.authenticate(), authentication.authentication);

module.exports = router;
