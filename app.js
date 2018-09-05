var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var auth = require("./server/config/auth.js")();
var morgan = require("morgan");
var fs = require("fs");
var path = require("path");
var hbs = require("hbs");

//var morganBody = require ('morgan-body');

var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});
const moment = require("moment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

//morganBody(app);

app.use(
  morgan(
    function(tokens, req, res) {
      var cache = [];
      var reqHeadersJson = JSON.stringify(req.headers, function(key, value) {
        if (typeof value === "object" && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
              // If this value does not reference a parent it can be deduped
              return JSON.parse(JSON.stringify(value));
            } catch (error) {
              // discard key if value cannot be deduped
              return;
            }
          }
          // Store value in our collection
          cache.push(value);
        }
        return value;
      });
      cache = [];
      reqHeadersJson = "{'headers':" + reqHeadersJson + ",";

      var reqParamsJson = JSON.stringify(req.params, function(key, value) {
        if (typeof value === "object" && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
              // If this value does not reference a parent it can be deduped
              return JSON.parse(JSON.stringify(value));
            } catch (error) {
              // discard key if value cannot be deduped
              return;
            }
          }
          // Store value in our collection
          cache.push(value);
        }
        return value;
      });
      cache = [];
      reqParamsJson = "'params':" + reqParamsJson + ",";

      var reqBodyJson = JSON.stringify(req.body, function(key, value) {
        if (typeof value === "object" && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Duplicate reference found
            try {
              // If this value does not reference a parent it can be deduped
              return JSON.parse(JSON.stringify(value));
            } catch (error) {
              // discard key if value cannot be deduped
              return;
            }
          }
          // Store value in our collection
          cache.push(value);
        }
        return value;
      });
      cache = null; // Enable garbage collection
      reqBodyJson = "'body':" + reqBodyJson + "}";

      return [
        moment(new Date()),
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens["response-time"](req, res),
        "ms",
        reqHeadersJson,
        reqParamsJson,
        reqBodyJson
      ].join(" ");
    },
    { stream: accessLogStream }
  )
);

app.use(auth.initialize());
app.use("/apidoc", express.static("apidoc"));

require("./routes")(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port, function() {
  console.log("Server Express Ready!");
});
