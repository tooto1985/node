var http = require("http");
var url = require("url");
var httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer({});
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (/^\/api\//i.test(pathname)) {
        proxy.web(request, response, {
            target: "http://127.0.0.1:3000"
        });
    } else {
        proxy.web(request, response, {
            target: "http://127.0.0.1:81"
        });
    }
}).listen(80);
