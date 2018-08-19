const express = require("express");
const router = express.Router();
const location = require("../controllers/location");
router.post("/", location.post);

module.exports = router;
