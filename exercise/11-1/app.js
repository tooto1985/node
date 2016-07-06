var mongodbUri = "mongodb://username:password@127.0.0.1/local?authSource=admin";
var collectionName = "login";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser());
app.use(session({
    secret: "abcabcabcabc"
}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res) {
    
});
app.post("/",function(req,res) {












});
app.get("/logout",function(req,res){


});
app.listen(process.env.PORT || 3000);