var url = require("url");
var querystring = require("querystring");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/login/" && request.method === "POST") {
        var body = [];
        request.on("data", function(chunk) {
            body.push(chunk);
        });
        request.on("end", function() {
            body = Buffer.concat(body).toString();
            var user = querystring.parse(body);
            console.log(user);
            response.write("login...");
            response.end();
        });
    }
};