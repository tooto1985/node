var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
    var contentType;

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

        response.writeHead(404);
        response.write("404 not found");
        response.end();

}).listen(process.env.PORT || 3000);
