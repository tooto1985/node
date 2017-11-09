var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/showname", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.post("/showname", function(req, res) {
    res.send("你的名子是:" + req.body.name + "(POST)");
});
app.listen(process.env.PORT || 3000);
