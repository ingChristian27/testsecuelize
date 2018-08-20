var express = require("express");
var app = express();
var jwt = require("jwt-simple");
var auth = require("./server/config/auth");
var users = require("./server/config/users.js");
var cfg = require("./server/config/passport.js");

var bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
require("./routes")(app);

const port = parseInt(process.env.PORT, 10) || 8000;

app.post("/token", function(req, res) {
  console.log("hola mundo");
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      var payload = {
        id: user.id
      };
      var token = jwt.encode(payload, cfg.jwtSecret);
      res.json({
        token: token
      });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.listen(port, function() {
  console.log("Server Express Ready!");
});
