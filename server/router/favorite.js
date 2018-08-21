const express = require("express");
const router = express.Router();
const favorite = require("../controllers/favorite");

var auth = require("../config/auth.js")();

router

  .post("/add", auth.authenticate(), favorite.add)

  .post("/search", auth.authenticate(), favorite.search)

  .post("/add_plate", auth.authenticate(), favorite.add_plate)

  .post("/delete", auth.authenticate(), favorite.deleteDriverFavorite);

module.exports = router;
