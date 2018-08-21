const express = require("express");
const router = express.Router();
const countries = require("../controllers/countries");

router.get("/", auth.authenticate(), countries.get);

module.exports = router;
