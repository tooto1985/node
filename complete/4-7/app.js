var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(request, response) {
    var contentType;
    var pathname = url.parse(request.url).pathname;
    var routes = {
        "/": function() {
            contentType = "text/html";
            return "./index.html";
        },
        "/index.css": function() {
            contentType = "text/css";
            return "./index.css";
        },
        "/index.js": function() {
            contentType = "application/javascript";
            return "./index.js";
        },
        "/index.png": function() {
            contentType = "image/png";
            return "./index.png";
        }
    };
    if (typeof routes[pathname] === "function") {
        var content = routes[pathname]();
        response.writeHead(200, {
            "Content-Type": contentType
        });
        fs.readFile(content, function(err, data) {
            if (!err) {
                response.write(data);
            } else {
                console.log(err);
            }
            response.end();
        });
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
