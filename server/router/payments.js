const express = require("express");
const router = express.Router();
const payments = require("../controllers/payments");
var auth = require("../config/auth.js")();

router.post("/", auth.authenticate(), payments.post);

module.exports = router;
