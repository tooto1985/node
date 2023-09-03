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

});
app.post("/",function(req,res) {












});
app.get("/logout",function(req,res){


});
app.listen(process.env.PORT || 3000);