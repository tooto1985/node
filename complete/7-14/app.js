var express = require("express");
var about = require("./routes/about");
var home = require("./routes/home");
var app = express();
app.set("view engine", "ejs");
app.use("/about", about);
app.use("(/|/home)", home);
app.listen(process.env.PORT || 3000);
