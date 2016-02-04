var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("Hello World!");
});
app.get("/:id", function(req, res) {
    res.send(req.params.id);
});
app.get("/:id/:val", function(req, res) {
    res.send(req.params.id + ":" + req.params.val);
});
app.listen(process.env.PORT || 3000);
