var http = require("http");
var api = require("./api");
var static = require("./static");
http.createServer(function(request, response) {
    api(request, response);
    static(request, response);
}).listen(process.env.PORT || 3000);
