var http = require("http");
var url = require("url");

http.createServer(function(request, response) {











    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("myname=" + myname);
    response.end();
}).listen(process.env.PORT || 3000);
