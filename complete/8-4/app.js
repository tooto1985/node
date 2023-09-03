var express = require("express");
var path = require("path");
var app = express();
var count = 10000;
app.use(express.static(path.join(__dirname, "public")));
app.get("/:opt/:val", function(req, res) {
    var val = parseInt(req.params.val);
    if (req.params.opt === "add") {
        count += val;
    }
    if (req.params.opt === "minus") {
        count -= val;
    }
    res.json(count);
});
app.listen(process.env.PORT || 3000);