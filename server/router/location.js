const express = require("express");
const router = express.Router();
const location = require("../controllers/location");
router.post("/", auth.authenticate(), location.post);

module.exports = router;
