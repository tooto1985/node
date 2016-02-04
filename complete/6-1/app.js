var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "application/json"
    });
    response.write(JSON.stringify({
        h1: "hello"
    }));
    response.end();
}).listen(process.env.PORT || 3000);
