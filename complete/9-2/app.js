var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    MongoClient.connect("mongodb://127.0.0.1/mydb", function(err, db) {
        if (!err) {
            res.send("連接成功");
            console.log(db);
        } else {
            res.send("連接失敗");
            console.log(err);
        }
    });
});
app.listen(process.env.PORT || 3000);