var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname.substr(pathname.length - 1) === "/") {
        pathname += "index.html"; //若無帶入檔名預設為index.html
    } else {
        var paths = pathname.split("/");
        if (paths[paths.length - 1].indexOf(".") < 0) {
            response.writeHead(301, {
                "Location": pathname + "/" + (url.parse(request.url).search || "")
            });
            response.end();
            return;
        }        
    }
    pathname = (process.argv[2] || ".") + pathname; //若有傳入參數則使用參數的路徑
    
    try {
        if (fs.statSync(pathname).isFile()) {
            response.writeHead(200, {
                "Content-Type": mime.lookup(pathname)
            });
            response.write(fs.readFileSync(pathname));
            response.end();
        } else {
            notFound();
        }
    } catch (e) {
        notFound();
    }
    function notFound() {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
