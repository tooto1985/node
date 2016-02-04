var http = require("http");
http.createServer(function(request, response) {



    response.write("<html>");
    response.write("<body>");
    response.write("<h1>Hello World!</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(process.env.PORT || 3000);
