var MongoClient = require("mongodb").MongoClient;
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
        
        
        
        
        
        
        db.collection("users").find(filter).toArray().then(function(data) {
            
        }, function(err) {
            res.render("message", {message: "讀取失敗！"});
            console.log(err);
        });
    }, function(err) {
        res.render("message", {message: "連接失敗！"});
        console.log(err);
    });
});
app.listen(process.env.PORT || 3000);
