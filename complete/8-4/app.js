var express = require("express");
var path = require("path");
var items = require("./items");
var app = express();
var session = require("express-session");
app.use(session({
    secret: "abcabcabcabc",
    cookie: {maxAge: new Date(Date.now() + (60 * 1000 * 30))}
}));
app.use(express.static(path.join(__dirname, "public")));
app.get("/add", function(req, res) {
    req.session["cart"] = req.session["cart"] || [];
    req.session["cart"].push(items.get(req.query.item));
    res.json(req.session["cart"]);
});
app.get("/remove", function(req, res) {
    var cart = req.session["cart"];
    cart.splice(cart.indexOf(cart.filter(function(item) {
        return item.name === req.query.item;
    })[0]), 1);
    res.json(cart);
});
app.get("/bag", function(req, res) {
    res.json(req.session["cart"] || []);
});
app.get("/list", function(req, res) {
    res.json(items.all());
});
app.listen(process.env.PORT || 3000);