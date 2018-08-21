const express = require("express");
const router = express.Router();
const ride = require("../controllers/ride");

router

  .post("/add", auth.authenticate(), ride.add)

  .put("/counteroffer/:id", auth.authenticate(), ride.counteroffer)

  .put("/edit/:id", auth.authenticate(), ride.edit)

  .get("/history/:id", auth.authenticate(), ride.history)

  .get("/history_favorite/:id", auth.authenticate(), ride.history_favorite);

module.exports = router;
