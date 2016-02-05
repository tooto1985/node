var http = require("http");
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    var url = req.query.url;
    if (url) {
        http.get(url, function(response) {
            var body = "";
            response.on("data", function(data) {
                body += data;
            });
            response.on("end", function() {
                res.jsonp(JSON.parse(body));
            });
        }).on("error",function() {
            res.send("error!");
        });
    } else {
        res.send("url param is required!");
    }
});
app.listen(process.env.PORT || 3000);