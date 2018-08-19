const express = require("express");
const router = express.Router();
const favorite = require("../controllers/favorite");

router

  .post("/add", favorite.add)

  .post("/search", favorite.search)

  .post("/add_plate", favorite.add_plate)

  .post("/delete", favorite.deleteDriverFavorite);

module.exports = router;
