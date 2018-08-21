const express = require("express");
const router = express.Router();
const client = require("../controllers/client");

router.get("/", auth.authenticate(), client.get);

module.exports = router;
