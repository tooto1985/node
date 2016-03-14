var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;
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
        insert({username: username, email: email, age: parseInt(age)},function() {
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
    select(age,function(data){
        res.render("list",{data:data,query:req.query});
    },function(err) {
        res.render("message", {message: "系統錯誤！"});
    });
});
app.get("/edit/:id",function(req,res) {
    var id=req.params.id;
    if (id) {
        id = {_id: new ObjectId(id)};
    }
    select(id,function(data){
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
        update(id,{username: username,email: email, age: parseInt(age)},function() {
            res.redirect("../list");
        },function() {
            res.render("message", {message: "系統錯誤！"});
        });
    }
});
app.get("/delete/:id",function(req,res) {
    var id = req.params.id;
    remove(id,function() {
        res.redirect("../list");
    },function() {
        res.render("message", {message: "系統錯誤！"});
    });
});
app.listen(process.env.PORT || 3000);
var mongodbUri = "mongodb://username:password@127.0.0.1:27017/mydb?authSource=admin";
var collectionName = "users";
function insert(insertObject,success,error) {
    MongoClient.connect(mongodbUri, function(err, db) {
        if (!err) {
            db.collection(collectionName).insert(insertObject, function(err, result) {
                if (!err) {
                    if (success) success(result);
                } else {
                    if (error) error(err);
                }
            });
        } else {
            if (error) error(err);
        }
    });
}
function select(filter,success,error) {
    MongoClient.connect(mongodbUri, function(err, db) {
        if (!err) {
            if (!filter) {
                filter = {};
            }
            db.collection(collectionName).find(filter).toArray(function(err,data) {
                if (!err) {
                    if (success) success(data);
                } else {
                    if (error) error(err);
                }
            });
        } else {
            if (error) error(err);
        }
    });
}
function update(id,updateObject,success,error) {
    MongoClient.connect(mongodbUri, function(err, db) {
        if (!err) {
            db.collection(collectionName).update({_id: new ObjectId(id)},{$set:updateObject},function(err,data) {
                if (!err) {
                    if (success) success(data);
                } else {
                    if (error) error(err);
                }
            });
        } else {
            if (error) error(err);
        }
    });
}
function remove(id,success,error) {
    MongoClient.connect(mongodbUri, function(err, db) {
        if (!err) {
            db.collection(collectionName).remove({_id: new ObjectId(id)},function(err,data){
                if (!err) {
                    if (success) success(data);
                } else {
                    if (error) error(err);
                }
            });
        } else {
            if (error) error(err);
        }
    });
}
