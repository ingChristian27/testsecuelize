const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authentication");
var auth = require("../config/auth.js")();

router.post("/", authentication.authentication);
router.post("/change-password/", auth.authenticate(), authentication.restore);
router.post("/generate-password/", authentication.sendMail);

module.exports = router;
