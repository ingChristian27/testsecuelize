var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var auth = require("./server/config/auth.js")();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth.initialize());
app.use("/apidoc", express.static("apidoc"));
require("./routes")(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port, function() {
  console.log("Server Express Ready!");
});
