const express = require("express");
const router = express.Router();
const clientToken = require("../controllers/client_token");

router

  .get("/", clientToken.get)

  .get("/:id", clientToken.getId);

module.exports = router;
