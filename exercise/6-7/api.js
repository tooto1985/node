
var url = require("url");
var fs = require("fs");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/upload/" && request.method === "POST") {













    }
}