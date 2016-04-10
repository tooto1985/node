var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    var content="", contentType="";
    var statusCode = 200;
    if (request.url === "/") {
        contentType = "text/html";
        content = fs.readFileSync("index.html");
    } else if (request.url === "/index.css") {
        contentType = "text/css";
        content = fs.readFileSync("index.css");
    } else if (request.url === "/index.js") {
        contentType = "application/x-javascript";
        content = fs.readFileSync("index.js");
    } else {
        statusCode = 404;
    }
    if (statusCode === 404) {
        response.writeHead(404);
        response.write("404 not found");
    } else {
        response.writeHead(200, {
            "Content-Type": contentType
        });
        response.write(content);
    }
    response.end();
}).listen(process.env.PORT || 3000);