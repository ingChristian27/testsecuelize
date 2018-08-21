var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var jwt = require("jwt-simple");
var auth = require("./server/config/auth.js")();
var users = require("./server/config/users");
//var cfg = require("./server/config/passport");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(auth.initialize());

require("./routes")(app);

app.post("/token", function(req, res) {
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
      console.log(payload);
      var token = jwt.encode(payload, cfg.jwtSecret);
      //const token = jwt.sign(payload, cfg.jwtSecret, { expiresIn });
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

app.get("/user", auth.authenticate(), function(req, res) {
  res.json({ message: "Por fin paso esa berga!!" });
});

app.use("/apidoc", express.static("apidoc"));
const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port, function() {
  console.log("Server Express Ready!");
});
