const express = require("express");
const router = express.Router();
const existsPayment = require("../controllers/exist_payment_method");

router.post("/", existsPayment.post);

module.exports = router;
