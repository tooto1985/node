var http = require("http");

http.createServer(function(request, response) {
	























	if (typeof routes[pathname] === "function") {
        routes[pathname]();
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);