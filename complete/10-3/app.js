var mongodbUri = "mongodb://username:password@127.0.0.1/?authSource=admin";
var dbName = "local";
var collectionName = "articles";
var Db = require("./db");
var db = new Db(mongodbUri,dbName,collectionName);
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res) {
    var num = parseInt(req.query.num);
    var fetch = parseInt(req.query.fetch);
    db.select(function(dbc) {
        return dbc.find({num:{$gt:num}}).sort({num:1}).limit(fetch);
    },function(data){
        res.json(data);
    },function(err) {
        console.log(err);
    });
});
app.listen(process.env.PORT || 3000);
