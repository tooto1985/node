var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
    res.render("home", {
        title: res.__("cool")
    });
});
module.exports=router;