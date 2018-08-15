var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = parseInt(process.env.PORT, 10) || 8000;

const authentication = require("./server/router/authentication");
const driverTypeAssign = require("./server/router/driver_type_assign");
const carMarks = require("./server/router/configuration");
const Ride = require("./server/router/ride");
const Profile = require("./server/router/profile");
const Resource = require("./server/router/resource");
const Valoration = require("./server/router/valoration");
const ClientToken = require("./server/router/client_token");
const Payments = require("./server/router/payments");
const ExistPaymentMethod = require("./server/router/exist_payment_method");
const Client = require("./server/router/client");
const AddPaymentMethod = require("./server/router/add_payment_method");
const DeletePayment = require("./server/router/delete_payment");
const HistoryPayment = require("./server/router/history_payment");
const SavedLocation = require("./server/router/saved_location");
const Favorite = require("./server/router/favorite");
const ReferDriver = require("./server/router/refer_driver");
const Delivery = require("./server/router/delivery");
const Country = require("./server/router/countries");

const carRouter = require("./server/router/car");
const drivpass = require("./server/router/drivpass");

app.use('/apidoc', express.static('apidoc'));

app.get('/apidoc', function (req, res) {
  res.sendFile('/apidoc/index.html');
});

app.use("/login", authentication);
app.use("/user", drivpass);
app.use("/me", drivpass);
app.use("/types", driverTypeAssign);
app.use("/car_marks", carMarks);
app.use("/ride", Ride);
app.use("/profile", Profile);
app.use("/resource", Resource);
app.use("/valoration", Valoration);
app.use("/client_token", ClientToken);
app.use("/client_token_id", ClientToken);
app.use("/payments", Payments);
app.use("/payments_exist", ExistPaymentMethod);
app.use("/client", Client);
app.use("/add_payment_method", AddPaymentMethod);
app.use("/delete_payment", DeletePayment);
app.use("/history_payment", HistoryPayment);
app.use("/saved_location", SavedLocation);
app.use("/favorite", Favorite);
app.use("/refer_driver", ReferDriver);
app.use("/delivery", Delivery);
app.use("/countries", Country);

app.use("/car", carRouter);
app.use("/drivpass", drivpass);

app.get("/", async (req, res, next) => {
  res.json({ message: "Servidor de test..." });
});
app.listen(port, function () {
  console.log("Server Express Ready!");
});
