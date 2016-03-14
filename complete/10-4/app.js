var mongodbUri = "mongodb://username:password@127.0.0.1:27017/local?authSource=admin";
var collectionName = "articles";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res) {
    var num = parseInt(req.query.num);
    var fetch = parseInt(req.query.fetch);
    db.select({$query:{num:{$gt:num}},$orderby:{num:1}},function(data){
        res.json(data);
    },function(err) {
        console.log(err);
    },fetch);
});
app.listen(process.env.PORT || 3000);
