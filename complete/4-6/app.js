var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    var content="", contentType="";
    var statusCode = 200;
    if (request.url === "/") {
        contentType = "text/html";
        content = "index.html";
    } else if (request.url === "/index.css") {
        contentType = "text/css";
        content = "index.css";
    } else if (request.url === "/index.js") {
        contentType = "application/javascript";
        content = "index.js";
    } else {
        statusCode = 404;
    }
    if (statusCode === 404) {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    } else {
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
    }
}).listen(process.env.PORT || 3000);