var express = require("express");
var path = require("path");
var app = express();
app.use(function(req,res,next) {
	console.log(new Date() + ":" + req.path);
	next();
});
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res,next) {
	console.log("api run 1");
	next();
});
app.get("/api",function(req,res,next) {
	console.log("api run 2");
	res.send("api");
});
app.listen(process.env.PORT || 3000);
