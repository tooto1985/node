var express = require("express");

var app = express();

app.get("/showname", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.listen(process.env.PORT || 3000);