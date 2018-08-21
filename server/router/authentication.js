const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authentication");

router.post("/", auth.authenticate(), authentication.authentication);

module.exports = router;
