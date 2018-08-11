var express = require("express");
var app = express();

const port = parseInt(process.env.PORT, 10) || 8000;
const carRouter = require("./server/router/car");
const drivpass = require("./server/router/drivpass");

app.use("/car", carRouter);
app.use("/drivpass", drivpass);

app.listen(port, function() {
  console.log("Server Express Ready!");
});
