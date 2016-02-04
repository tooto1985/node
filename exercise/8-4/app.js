var express = require("express");
var app = express();






app.get("/", function(req, res) {

    res.send("ok");
});
app.get("/get/:key",function(req,res) {

});
app.get("/set/:key/:value", function(req, res) {

	res.send("set ok");
});
app.listen(process.env.PORT || 3000);
