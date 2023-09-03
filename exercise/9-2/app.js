var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    var client = new MongoClient("mongodb://192.168.0.1");
    client.connect().then(function() {
        var db = client.db("mydb");
        res.send("連接成功");
        console.log(db);
    }, function(err) {
        res.send("連接失敗");
        console.log(err);
    });
});
app.listen(process.env.PORT || 3000);