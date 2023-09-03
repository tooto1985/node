var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var path = require("path");
var app = express();
var uploading = multer({
    dest: __dirname + "/upload"
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.post("/upload", uploading.any(), function(req, res) {
    for (var i = 0; i < req.files.length; i++) {
        var file = req.files[i];
        fs.rename(file.path, "./upload/" + file.originalname, function() {});
    }
    res.send("ok:" + req.body.message);
});
app.listen(process.env.PORT || 3000);
