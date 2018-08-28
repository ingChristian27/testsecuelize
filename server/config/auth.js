// auth.js
var passport = require("passport");
var passportJWT = require("passport-jwt");

const User = require("../database/drivpass");
const Database = require("../database/drivpass");
var cfg = require("./passport.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
  secretOrKey: cfg.jwtSecret,
  //jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

var myUser = null;

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    console.log("Por fin entro al token....");
    console.log(payload.email);
    console.log("==============");

    Database.selectByEmail(payload.email).then(user => {
      
      if (user) {
        myUser = user;
        return done(null, {
          email: user.email
        });
      } else {
        return done(new Error("User not found"), null);
      }
    });


  });

  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    },getDecodeToken: function(){
      return myUser;
    }
  };
};
