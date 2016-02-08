var util = require("util");
var url = require("url");

module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/login/" && request.method === "POST") {









    }
}