var mongodbUri = "mongodb://username:password@127.0.0.1/?authSource=admin";
var dbName = "local";
var collectionName = "login";
var Db = require("./db");
var db = new Db(mongodbUri,dbName,collectionName);
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "abcabcabcabc",
    resave: false,
    saveUninitialized: false
}));











app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res) {
    res.render("index",{isLogin:req.session["login"]});
});
app.post("/",function(req,res) {
    var userid = req.body.userid;
    var password = req.body.password;
    db.select({userid:userid,password:password},function(data){
        if(data.length===1) {
            req.session["login"]=true;
            res.redirect("/");
        } else {
            res.render("error",{message:"帳號密碼錯誤"}); 
        }
    },function(err) {
        console.log(err);
    });
});
app.get("/logout",function(req,res){
    req.session.destroy();
    res.redirect("/");
});
app.listen(process.env.PORT || 3000);