const express = require("express");
const router = express.Router();
const referDriver = require("../controllers/refer_driver");

router.post("/", auth.authenticate(), referDriver.post);

module.exports = router;
