var express = require("express");
var path = require("path");

var app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {










});
app.listen(process.env.PORT || 3000);