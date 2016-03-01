var http = require("http");
http.createServer(function(request, response) {


    response.write("你好Node.JS!");


    response.end();
}).listen(process.env.PORT || 3000);
