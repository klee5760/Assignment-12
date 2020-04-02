var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function(req, res) {

    burgers.selectAll(function(data){
        res.render("index", {
          burgers: data
        });
    })
});

router.post("/api/burgers", function(req, res) {
  burgers.insertOne(
    ["burger_name", "devoured"],
    [res.body.burger_name, res.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id= " + req.params.id;

  console.log("condition", condition);
  burgers.updateOne({ devoured: req.body.devoured }, condition, function(
    result
  ) {
    if ((result, changedRows === 0)) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  burgers.deleteOne(condition, function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("consition", condition);

    burgers.deleteOne(condtion, function(result) {
      if ((result, changedRows === 0)) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});

module.exports = router;
