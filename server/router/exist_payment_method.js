const express = require("express");
const router = express.Router();
const existsPayment = require("../controllers/exist_payment_method");
var auth = require("../config/auth.js")();

router.post("/", auth.authenticate(), existsPayment.post);

module.exports = router;
