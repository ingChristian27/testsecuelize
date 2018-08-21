const express = require("express");
const router = express.Router();
const delivery = require("../controllers/delivery");
router.post("/add", auth.authenticate(), delivery.add);

module.exports = router;
