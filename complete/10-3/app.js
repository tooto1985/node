var mongodbUri = "mongodb://username:password@127.0.0.1/local?authSource=admin";
var collectionName = "names";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res) {
    var search = req.query.search;
    db.select({name:new RegExp(search,"i")},function(data) {
        res.json(data.map(function(a) {
            return a.name;
        }));
    },function(err) {
        res.json([]);
    });
});
app.listen(process.env.PORT || 3000);
