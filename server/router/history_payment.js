const express = require("express");
const router = express.Router();
const history = require("../controllers/history_payment");

router.get("/:id", history.get);

module.exports = router;
