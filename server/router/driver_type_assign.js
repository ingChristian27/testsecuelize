const express = require("express");
const router = express.Router();
const driver = require("../controllers/driver_type_assign");
router.post("/add/:id", driver.add);

module.exports = router;
