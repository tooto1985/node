var http = require("http");
var url = require("url");
http.createServer(function(request, response) {
    var query = url.parse(request.url, true).query;
    var format = {
        "text": function() {
            response.writeHead(200, {
                "Content-Type": "text/plane"
            });
            response.write("<h1>hello</h1>");
            response.end();
        },
        "html": function() {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write("<h1>hello</h1>");
            response.end();
        },
        "json": function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify({
                h1: "hello"
            }));
            response.end();
        }
    };
    if (query.format && typeof format[query.format] === "function") {
        format[query.format]();
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
