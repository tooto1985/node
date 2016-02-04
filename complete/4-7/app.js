var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(request, response) {
    var contentType;
    var pathname = url.parse(request.url).pathname;
    var routes = {
        "/": function() {
            contentType = "text/html";
            return fs.readFileSync("./index.html");
        },
        "/index.css": function() {
            contentType = "text/css";
            return fs.readFileSync("./index.css");
        },
        "/index.js": function() {
            contentType = "application/x-javascript";
            return fs.readFileSync("./index.js");
        },
        "/index.png": function() {
            contentType = "image/png";
            return fs.readFileSync("./index.png");
        }
    };
    if (typeof routes[pathname] === "function") {
        var data = routes[pathname]();
        response.writeHead(200, {
            "Content-Type": contentType
        });
        response.write(data);
        response.end();
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
