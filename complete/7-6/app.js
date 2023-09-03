var https = require("https");
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    var url = req.query.url;
    if (url) {
        https.get(url, function(response) {
            var body = [];
            response.on("data", function(chunk) {
                body.push(chunk);
            });
            response.on("end", function() {
                body = Buffer.concat(body).toString();
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