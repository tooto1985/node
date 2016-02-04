var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.post("/", function(req, res) {
	
});
app.listen(process.env.PORT || 3000);
