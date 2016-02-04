var http = require("http");
var url = require("url");
http.createServer(function(request, response) {


























    if (query.format && typeof format[query.format] === "function") {
        format[query.format]();
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
