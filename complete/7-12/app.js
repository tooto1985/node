var express = require("express");
var path = require("path");
var app = express();
app.use(function(req,res,next) {
	console.log(new Date() + ":" + req.url);
	next();
});
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req,res,next) {
	console.log(new Date() + ":" + req.url);
	next();
});
app.get("/",function(req,res,next) {
	var html = "<h1>List</h1>";
	html += "<a href=\"news\">news</a>";
	res.send(html);
});
app.listen(process.env.PORT || 3000);