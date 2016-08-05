var jsdom = require("jsdom");
var express = require("express");
var app = express();
app.get("/:area", function(req, res) {
    jsdom.env("http://www.cwb.gov.tw/V7/forecast/week/week.htm", ["http://code.jquery.com/jquery.js"], function(err, window) {
        var $ = window.$;
        res.send("<table><tr>" + $("th:contains('" + req.params.area + "')").parent().html() + "</tr></table>");
    });
});
app.listen(process.env.PORT || 3000);