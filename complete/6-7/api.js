var url = require("url");
var querystring = require("querystring");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var format = {
        "json": function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify({
                message: "json: " + request.body.username
            }));
            response.end();
        },
        "text": function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify({
                message: "text: " + request.body.username
            }));
            response.end();
        }
    };
    if (pathname === "/api/" && request.method === "POST") {
        var jsondata = "";
        request.on("data", function(data) {
            jsondata += data;
        });
        request.on("end", function() {
            request.body = querystring.parse(jsondata);
            var query = url.parse(request.url, true).query;
            format[query.format]();
        });
    }
}
