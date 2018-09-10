const express = require("express");
const router = express.Router();
const verify = require("../controllers/verify");
var auth = require("../config/auth.js")();

router.get("/:idDriver", verify.get);

module.exports = router;
