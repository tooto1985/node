var express = require("express");
var app = express();
var session = require("express-session");
app.use(session({
    secret: "abcabcabcabc",
    resave: true,
    saveUninitialized: true
}));
app.get("/", function(req, res) {
	console.log(req.sessionID);
    res.send("ok");
});
app.get("/get/:key",function(req,res) {
	res.send(req.session[req.params.key]);
});
app.get("/set/:key/:value", function(req, res) {
	req.session[req.params.key]=req.params.value;
	res.send("set ok");
});
app.listen(process.env.PORT || 3000);
