var express = require("express");
var path = require("path");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());




app.use(express.static(path.join(__dirname, "public")));
app.listen(process.env.PORT || 3000);