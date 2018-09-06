const express = require("express");
const router = express.Router();
const countries = require("../controllers/countries");
const infoCar = require("../controllers/infor_car");

var auth = require("../config/auth.js")();

router.get("/mark", infoCar.mark);
router.get("/model/:mark", infoCar.model);
router.get("/color", infoCar.color);

module.exports = router;

/**
 * http://localhost:8000/info_car/mark
 * http://localhost:8000/info_car/model/model
 */
