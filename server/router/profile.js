const express = require("express");
const router = express.Router();
const profile = require("../controllers/profile");

router.post("/verify", auth.authenticate(), profile.verify);

module.exports = router;
