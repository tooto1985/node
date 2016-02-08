var url = require("url");
var querystring = require("querystring");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/login/" && request.method === "POST") {
        var postdata = "";
        request.on("data", function(data) {
            postdata += data;
        });
        request.on("end", function() {
            request.body = querystring.parse(postdata);
            response.writeHead(200,{
                "Content-Type":"text/html"
            });
            if (request.body.username === "username" && request.body.password === "password") {
                response.write("<h1>登入成功</h1>");
            } else {
                response.write("<h1>登入失敗</h1>");
            }
            response.end();
        });
    }
}