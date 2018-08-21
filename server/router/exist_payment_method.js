const express = require("express");
const router = express.Router();
const existsPayment = require("../controllers/exist_payment_method");

router.post("/", auth.authenticate(), existsPayment.post);

module.exports = router;
