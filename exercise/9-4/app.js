var MongoClient = require("mongodb").MongoClient;
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
        MongoClient.connect("mongodb://username:password@127.0.0.1:27017/mydb?authSource=admin", function(err, db) {
            if (!err) {











            }
        });
    }
});
app.listen(process.env.PORT || 3000);
   
   
   