var express = require("express");
var path = require("path");
var fs = require("fs");
var acceptLanguage = require("accept-language");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
    var language = acceptLanguage.parse(req.headers["accept-language"]);
    var folder = language[0].language;
    fs.stat("./public/" + folder, function(err, stats) {
    	if (!err && stats.isDirectory()) {
    		res.redirect(folder);
        } else {
            res.redirect("en");
        }
    });
});
app.listen(process.env.PORT || 3000);
