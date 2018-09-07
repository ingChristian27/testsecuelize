const express = require("express");
const router = express.Router();
const answer = require("../controllers/answers");
var auth = require("../config/auth.js")();

router.post("/", /*auth.authenticate(),*/ answer.addAnswers);

module.exports = router;
