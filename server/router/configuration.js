const express = require("express");
const router = express.Router();
const configuration = require("../controllers/configuration");

router.get("/", auth.authenticate(), configuration.get);

module.exports = router;
