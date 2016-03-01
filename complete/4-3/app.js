var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    response.write("<html>");
    //response.write("<head>");
    //response.write("<meta charset=\"UTF-8\">");
    //response.write("</head>");
    response.write("<body>");
    response.write("<h1>你好Node.JS!</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(process.env.PORT || 3000);
