var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = parseInt(process.env.PORT, 10) || 8000;

const authentication = require("./server/router/authentication");
const driverTypeAssign = require("./server/router/driver_type_assign");

const carRouter = require("./server/router/car");
const drivpass = require("./server/router/drivpass");

app.use("/login", authentication);
app.use("/user", drivpass);
app.use("/me", drivpass);
app.use("/types", driverTypeAssign);

app.use("/car_info", carRouter);
app.use("/drivpass", drivpass);

app.get("/", async (req, res, next) => {
  res.json({ message: "Servidor de test..." });
});
app.listen(port, function() {
  console.log("Server Express Ready!");
});
