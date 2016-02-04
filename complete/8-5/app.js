var express = require("express");
var app = express();
var count=0;
app.get("/",function(req,res) {
	count++;
	res.send("訪客人次" + count);
});
app.listen(process.env.PORT || 3000);