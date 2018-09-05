// services.js
var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("../config/passport");

exports.createToken = function(email) {
  var payload = {
    sub: email,
    iat: moment().unix(),
    exp: moment()
      .add(1, "days")
      .unix()
  };

  return jwt.encode(payload, config.jwtSecret);
};

exports.payload = function(token) {
  return jwt.decode(token, config.jwtSecret);
};

exports.ensureAuthenticated = function(req, res, next) {
  if (!req.params.token) {
    return res.status(403).send({ message: "Tu petición no tiene token" });
  }
  var token = req.params.token;
  var payload = jwt.decode(token, config.jwtSecret);

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: "El token ha expirado" });
  }

  req.user = payload.sub;
  next();
};
