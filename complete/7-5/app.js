var express = require("express");
var app = express();
app.get("/:name",function(req, res) {
	res.jsonp({"name":req.params.name});
});
app.listen(process.env.PORT || 3000);