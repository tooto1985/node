var i18n = require("i18n");
var express = require("express");
var about = require("./routes/about");
var home = require("./routes/home");
var app = express();
i18n.configure({
  locales:['en', 'zh', 'zh-TW'],
  directory: __dirname + '/locales'
});
app.use(i18n.init);
app.set("view engine", "ejs");
app.use("/about", about);
app.use("(/|/home)", home);
app.listen(process.env.PORT || 3000);
