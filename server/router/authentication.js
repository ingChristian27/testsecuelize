const express = require("express");
const router = express.Router();
const authentication = require("../controllers/authentication");
var auth = require("../config/auth.js")();
const serviceToken = require("../services/token");

router.post("/", authentication.authentication);
router.post("/change-password/", authentication.restore);
router.post("/generate-password/", authentication.sendMail);
router.get(
  "/restore/:token",
  serviceToken.ensureAuthenticated,
  authentication.validateToken
);
router.post("/new-password-web", authentication.newPasswordWeb);

module.exports = router;
