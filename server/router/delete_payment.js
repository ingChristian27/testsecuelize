const express = require("express");
const router = express.Router();
const deletePayment = require("../controllers/delete_payment");

router.post("/", auth.authenticate(), deletePayment.post);

module.exports = router;
