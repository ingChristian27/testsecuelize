const express = require("express");
const router = express.Router();
const resource = require("../controllers/resource");

router.post("/add", auth.authenticate(), resource.add);

module.exports = router;
