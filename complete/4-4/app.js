var http = require("http");
var fs = require("fs");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs.readFile("index.html", function(err, data) {
        if (!err) {
            response.write(data);
        } else {
            console.log(err);
        }
        response.end();
    });
}).listen(process.env.PORT || 3000);
