var express = require("express");
var app = express();


app.use(express.static(__dirname + "/public"));





server.listen(process.env.PORT || 3000);