var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });








}).listen(process.env.PORT || 3000);