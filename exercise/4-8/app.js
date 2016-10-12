var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;







                response.writeHead(200, {
                    "Content-Type":
                });
                fs.readFile(pathname, function(err, data) {
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
