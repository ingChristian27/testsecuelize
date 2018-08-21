const express = require("express");
const router = express.Router();
const valorations = require("../controllers/valoration");

router

  .post("/add", auth.authenticate(), valorations.add)

  .get("/:id/:type", auth.authenticate(), valorations.get);

module.exports = router;
