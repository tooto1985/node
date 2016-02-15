var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>Node.JS!</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(process.env.PORT || 3000);
