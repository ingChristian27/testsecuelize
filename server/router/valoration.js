const express = require("express");
const router = express.Router();
const valorations = require("../controllers/valoration");

router

  .post("/add", valorations.add)

  .get("/:id/:type", valorations.get);

module.exports = router;
