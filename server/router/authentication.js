const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authentication");

router.post("/", authentication.authentication);

module.exports = router;
