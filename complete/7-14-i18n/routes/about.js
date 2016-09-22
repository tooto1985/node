var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
    res.render("about", {
        title: res.__("company")
    });
});
module.exports=router;