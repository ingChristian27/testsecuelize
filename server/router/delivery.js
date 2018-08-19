const express = require("express");
const router = express.Router();
const delivery = require("../controllers/delivery");
router.post("/add", delivery.add);

module.exports = router;
