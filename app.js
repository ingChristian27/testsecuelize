var express = require("express");
var app = express();

const port = parseInt(process.env.PORT, 10) || 8000;
const carRouter = require("./server/router/car");
const drivpass = require("./server/router/drivpass");

app.use("/car_info", carRouter);
app.use("/drivpass", drivpass);

app.get("/", async (req, res, next) => {
  res.json({ message: "Servidor de test..." });
});
app.listen(port, function() {
  console.log("Server Express Ready!");
});
