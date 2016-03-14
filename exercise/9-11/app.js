var mongodbUri = "mongodb://username:password@127.0.0.1:27017/mydb?authSource=admin";
var collectionName = "users";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser());
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
        db.insert({username: username, email: email, age: parseInt(age)},function() {
            res.render("message", {message: "謝謝您！", success:true});
        },function() {
            res.render("message", {message: "系統錯誤！"});
        });
    }
});
app.get("/list",function(req,res){
    var age = req.query.age;
    if (age) {
        age = {age:{$gte:parseInt(age)}};
    }
    db.select(age,function(data){
        res.render("list",{data:data,query:req.query});
    },function(err) {
        res.render("message", {message: "系統錯誤！"});
    });
});
app.get("/edit/:id",function(req,res) {
    var id=req.params.id;
    if (id) {
        id = {_id: db.id(id)};
    }
    db.select(id,function(data){
        res.render("edit",{data:data[0]});
    },function(err) {
        res.render("message", {message: "系統錯誤！"});
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
        db.update(id,{username: username,email: email, age: parseInt(age)},function() {
            res.redirect("../list");
        },function() {
            res.render("message", {message: "系統錯誤！"});
        });
    }
});
app.get("/delete/:id",function(req,res) {
    var id = req.params.id;
    db.remove(id,function() {
        res.redirect("../list");
    },function() {
        res.render("message", {message: "系統錯誤！"});
    });
});
app.listen(process.env.PORT || 3000);
