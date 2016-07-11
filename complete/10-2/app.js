var mongodbUri = "mongodb://username:password@127.0.0.1/local?authSource=admin";
var collectionName = "users";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res) {
    var username = req.query.username;
    var isregister = req.query.isregister === "true" ? true : false;
    db.select({name:username},function(data){
        if (data.length>0) {
            res.json(isregister?false:true);
        } else {
            if (isregister) {
                db.insert({name:username},function(data) {
                    res.json(true);
                },function(err){
                    res.json(false);
                });
            } else {
                res.json(false);
            }
        }
    },function(err) {
        console.log(err);
        res.end();
    });
});
app.listen(process.env.PORT || 3000);