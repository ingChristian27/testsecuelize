const express = require("express");
const router = express.Router();
const clientToken = require("../controllers/client_token");

router

  .get("/", auth.authenticate(), clientToken.get)

  .get("/:id", auth.authenticate(), clientToken.getId);

module.exports = router;
