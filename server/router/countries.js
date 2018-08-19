const express = require("express");
const router = express.Router();
const countries = require("../controllers/countries");

router.get("/", countries.get);

module.exports = router;
