const express = require("express");
const router = express.Router();
const saved = require("../controllers/saved_location");

router

  .get("/:id", saved.get)

  .post("/", saved.post);

module.exports = router;
