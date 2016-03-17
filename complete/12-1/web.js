var http = require("http");
http.createServer(function(request, response) {
    response.write("other website");
    response.end();
}).listen(81);