const express = require("express");
const router = express.Router();
const deletePayment = require("../controllers/delete_payment");

router.post("/", deletePayment.post);

module.exports = router;
