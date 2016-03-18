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
            var user = querystring.parse(postdata);
            console.log("username=>" + user.username + ",password=>" + user.password);
            response.write("login...");
            response.end();
        });
    }
};