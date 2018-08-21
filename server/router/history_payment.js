const express = require("express");
const router = express.Router();
const history = require("../controllers/history_payment");

var auth = require("../config/auth.js")();

router.get("/:id", auth.authenticate(), history.get);

module.exports = router;
