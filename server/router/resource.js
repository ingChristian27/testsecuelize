const express = require("express");
const router = express.Router();
const resource = require("../controllers/resource");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();

var auth = require("../config/auth.js")();

router.post("/add", auth.authenticate(), multipartMiddleware, resource.add);

module.exports = router;
