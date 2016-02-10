var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("<h1>Node.JS!</h1>");
});
app.get("/text", function(req, res) {
	res.set("Content-Type", "text/plain");
    res.send("<h1>Node.JS!</h1>");
});
app.get("/:name", function(req, res) {
	res.send("<h1>Hi, " + req.params.name + "</h1>");
});
app.get("/:name/:age", function(req, res) {
	var html="<h1>Hi, " + req.params.name + "</h1>";
	html+="<h2>I'm " + req.params.age + "<h2>";
	res.send(html);
});
app.listen(process.env.PORT || 3000);