const express = require("express");
const router = express.Router();
const drivpass = require("../controllers/drivpass");
router

  .post("/add", drivpass.add)

  .post("/profile", drivpass.profile)

  .get("/:id", drivpass.getId)

  .post("/edit/:id", drivpass.edit)

  .put("/edit/:id", drivpass.put)

  .post("/buytoken", drivpass.buytoken);

module.exports = router;
