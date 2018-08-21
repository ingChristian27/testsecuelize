const express = require("express");
const router = express.Router();
const payments = require("../controllers/payments");

router.post("/", auth.authenticate(), payments.post);

module.exports = router;
