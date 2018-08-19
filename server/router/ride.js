const express = require("express");
const router = express.Router();
const ride = require("../controllers/ride");

router

  .post("/add", ride.add)

  .put("/counteroffer/:id", ride.counteroffer)

  .put("/edit/:id", ride.edit)

  .get("/history/:id", ride.history)

  .get("/history_favorite/:id", ride.history_favorite);

module.exports = router;
