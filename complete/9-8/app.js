var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/send",function(req,res){
    res.redirect("../");
});
app.post("/send", function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var age = req.body.age;
    if (!username || !email || !age) {
        res.render("message", {message: "請填寫完整資料喔！"});
    } else {
        var client = new MongoClient("mongodb://username:password@127.0.0.1/?authSource=admin");
        client.connect().then(function() {
            var db = client.db("mydb");
            db.collection("users").insertOne({username: username, email: email, age: parseInt(age)}).then(function(result) {
                res.render("message", {message: "謝謝您！", success:true});
            }, function(err) {
                res.render("message", {message: "寫入失敗！"});
                console.log(err);
            })
        }, function(err) {
            res.render("message", {message: "連接失敗！"});
            console.log(err);
        });
    }
});
app.get("/list",function(req,res){
    var client = new MongoClient("mongodb://username:password@127.0.0.1/?authSource=admin");
    client.connect().then(function() {
        var db = client.db("mydb");
        var age = req.query.age;
        var filter = {};
        if (age) {
            age = parseInt(age);
            filter = {age:{$gte:age}};
        }
        db.collection("users").find(filter).toArray().then(function(data) {
            res.render("list",{data:data,query:req.query});
        }, function(err) {
            res.render("message", {message: "讀取失敗！"});
            console.log(err);
        });
    }, function(err) {
        res.render("message", {message: "連接失敗！"});
        console.log(err);
    });
});
app.get("/edit/:id",function(req,res) {
    var client = new MongoClient("mongodb://username:password@127.0.0.1/?authSource=admin");
    client.connect().then(function() {
        var db = client.db("mydb");
        var id=req.params.id;
        db.collection("users").find({_id: new ObjectId(id)}).toArray().then(function(data) {
            res.render("edit",{data:data[0]});
        }, function(err) {
            res.render("message", {message: "讀取失敗！"});
            console.log(err);
        });
    }, function(err) {
        res.render("message", {message: "連接失敗！"});
        console.log(err);
    });
});
app.post("/edit",function(req,res) {
    var id = req.body.id;
    var username = req.body.username;
    var email = req.body.email;
    var age = req.body.age;
    if (!id || !username || !email || !age) {
        res.render("message", {message: "請填寫完整資料喔！"});
    } else {
        var client = new MongoClient("mongodb://username:password@127.0.0.1/?authSource=admin");
        client.connect().then(function() {
            var db = client.db("mydb");
            db.collection("users").updateOne({_id: new ObjectId(id)},{$set:{username: username,email: email, age: parseInt(age)}}).then(function(data) {
                res.redirect("../list");
            }, function(err) {
                res.render("message", {message: "寫入失敗！"});
                console.log(err);
            });
        }, function(err) {
            res.render("message", {message: "連接失敗！"});
            console.log(err);
        });
    }
});
app.get("/delete/:id",function(req,res) {
    var id = req.params.id;
    var client = new MongoClient("mongodb://username:password@127.0.0.1/?authSource=admin");
    client.connect().then(function() {
        var db = client.db("mydb");
        db.collection("users").deleteOne({_id: new ObjectId(id)}).then(function(data){
            res.redirect("../list");
        }, function(err) {
            res.render("message", {message: "刪除失敗！"});
            console.log(err);
        });
    }, function(err) {
        res.render("message", {message: "連接失敗！"});
        console.log(err);
    });
});
app.listen(process.env.PORT || 3000);