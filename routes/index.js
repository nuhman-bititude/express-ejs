var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var year = new Date().getFullYear();
  res.render("index", { title: "Portfolio" ,year:year});
});

module.exports = router;
