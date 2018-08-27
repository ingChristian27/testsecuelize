const express = require("express");
const router = express.Router();
const countries = require("../controllers/countries");

var auth = require("../config/auth.js")();

router.get("/", countries.get);

module.exports = router;