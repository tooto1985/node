var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(fs.readFileSync("index.html"));
    response.end();
}).listen(process.env.PORT || 3000);
