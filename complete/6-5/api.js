var util = require("util");
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
            console.log(postdata + " => " + util.inspect(querystring.parse(postdata)));
            response.write("ok");
            response.end();
        });
    }
}