var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
    if (req.headers["accept-language"].split(",")[0] === "zh-TW") {
        res.redirect("zh");
    } else {
        res.redirect("en");
    }
});
app.listen(process.env.PORT || 3000);
