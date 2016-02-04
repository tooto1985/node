var http = require("http");
var url = require("url");
http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	var routes = {
		"/getdata/text": function() {
			response.writeHead(200,{
				"Content-Type": "text/plane"
			});
			response.write("<h1>hello</h1>");
			response.end();
		},
		"/getdata/html": function() {
			response.writeHead(200,{
				"Content-Type": "text/html"
			});
			response.write("<h1>hello</h1>");
			response.end();
		},
		"/getdata/json": function() {
			response.writeHead(200,{
				"Content-Type": "application/json"
			});
			response.write(JSON.stringify({h1:"hello"}));
			response.end();
		}
	};
	if (typeof routes[pathname] === "function") {
        routes[pathname]();
    } else {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);