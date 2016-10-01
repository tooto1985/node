var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;






























}).listen(process.env.PORT || 3000);
