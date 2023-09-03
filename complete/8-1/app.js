var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var app = express();
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
    var theme = "1";
    if (req.query.theme) {
        res.cookie("theme", req.query.theme);
        theme = req.query.theme;
    } else {
        if (req.cookies.theme) {
            theme = req.cookies.theme;
        }
    }
    res.render("index", {theme: theme});
});
app.listen(process.env.PORT || 3000);