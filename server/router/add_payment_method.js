const express = require("express");
const router = express.Router();
const Database = require("../database/countries");
const payment = require("../controllers/add_payment_method");

router.post("/", auth.authenticate(), payment.payment);

module.exports = router;
