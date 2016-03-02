var jsdom = require("jsdom");
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    jsdom.env("http://www.cwb.gov.tw/V7/forecast/week/week.htm", ["http://code.jquery.com/jquery.js"], function(err, window) {
        var $ = window.$;
        console.log($(".BoxTableInside").html());
        res.end("ok");
    });
});
app.listen(3000);