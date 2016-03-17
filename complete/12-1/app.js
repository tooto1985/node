var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify({
        "api": "data"
    }));
    response.end();
}).listen(3000);
