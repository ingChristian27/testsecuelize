const express = require("express");
const router = express.Router();
const client = require("../controllers/client");

router.get("/", client.get);

module.exports = router;
