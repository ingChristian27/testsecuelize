const express = require("express");
const router = express.Router();
const referDriver = require("../controllers/refer_driver");

router.post("/", referDriver.post);

module.exports = router;
