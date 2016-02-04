var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {









});
app.listen(process.env.PORT || 3000);
