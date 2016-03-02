var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.post("/", function(req, res) {
    res.send("你的名子是:" + req.body.username + "(POST)");
});
app.listen(process.env.PORT || 3000);
