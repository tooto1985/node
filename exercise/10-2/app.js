var mongodbUri = "mongodb://127.0.0.1/local";
var collectionName = "users";
var Db = require("./db");
var db = new Db(mongodbUri,collectionName);
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/api",function(req,res) {




















});
app.listen(process.env.PORT || 3000);