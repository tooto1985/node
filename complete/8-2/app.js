var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());
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
});
app.listen(process.env.PORT || 3000);
