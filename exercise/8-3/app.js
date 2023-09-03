var express = require("express");
var path = require("path");
var items = require("./items");
var app = express();
var session = require("express-session");







app.use(express.static(path.join(__dirname, "public")));
app.get("/add", function(req, res) {



});
app.get("/remove", function(req, res) {





});
app.get("/bag", function(req, res) {

});
app.get("/list", function(req, res) {

});
app.listen(process.env.PORT || 3000);