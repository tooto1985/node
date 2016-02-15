var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("<h1>Node.JS!</h1>");
});
app.get("/text", function(req, res) {
    res.set("Content-Type", "text/plain");
    res.send("<h1>Node.JS!</h1>");
});








app.listen(process.env.PORT || 3000);