var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
require("./routes")(app);
const port = parseInt(process.env.PORT, 10) || 8000;

app.use("/apidoc", express.static("apidoc"));

app.listen(port, function() {
  console.log("Server Express Ready!");
});
