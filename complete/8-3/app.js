var express = require("express");
var path = require("path");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.get("/", function(req, res) {
    var myname = "";
    if (req.query.myname) {
        res.cookie("myname", req.query.myname);
        myname = req.query.myname;
    } else {
        if (req.cookies.myname) {
            myname = req.cookies.myname;
        }
    }
    res.send("myname=" + myname);
    console.log(req.cookies);
});
app.listen(process.env.PORT || 3000);
