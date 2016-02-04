var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("GET!");
});
app.post("/", function(req, res) {
    res.send("POST!");
});
app.listen(process.env.PORT || 3000);
