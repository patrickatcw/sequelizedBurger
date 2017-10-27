var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var router = require("./controllers/burgers_controller.js");

app.use("/", router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 });