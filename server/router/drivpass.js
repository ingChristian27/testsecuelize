const express = require("express");
const router = express.Router();
const drivpass = require("../controllers/drivpass");
var auth = require("../config/auth.js")();

router

  .post("/add", drivpass.add)

  .post("/profile", auth.authenticate(), drivpass.profile)

  .get("/:id", auth.authenticate(), drivpass.getId)

  .post("/edit/:id", auth.authenticate(), drivpass.edit)

  .put("/edit/:id", auth.authenticate(), drivpass.put)

  .post("/buytoken", auth.authenticate(), drivpass.buytoken);

module.exports = router;
