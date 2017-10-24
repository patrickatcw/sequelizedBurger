var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(reg,res) {
  db.Burger.findAll(function(data) {
    var retObject = {
      burgers: data
    };
      res.render("index", retObject);
    });
});

router.post("/api/burgers", function(req, res) {
  burger.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(burgerTodo) {
      // We have access to the new todo as an argument inside of the callback function
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
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
