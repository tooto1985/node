var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {











    response.writeHead(200, {
        "Content-Type": contentType
    });
    response.write(content);
    response.end();
}).listen(process.env.PORT || 3000);