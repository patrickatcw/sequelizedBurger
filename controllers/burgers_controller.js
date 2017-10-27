var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var router = express.Router();

var db = require("../models/");


router.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
    res.render("index", data);
    });
  });

router.post("/api/burgers", function(req, res) {
  burger.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(burgerTodo) {
      res.json(burgerTodo)
    });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

