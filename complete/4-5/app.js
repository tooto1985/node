var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    var content="", contentType="";
    if (request.url === "/") {
        contentType = "text/html";
        content = "index.html";
    } else if (request.url === "/index.css") {
        contentType = "text/css";
        content = "index.css";
    } else if (request.url === "/index.js") {
        contentType = "application/x-javascript";
        content = "index.js";
    }
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
}).listen(process.env.PORT || 3000);