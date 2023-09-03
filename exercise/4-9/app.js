var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname.endsWith("/")) {
        pathname += "index.html"; //若無帶入檔名預設為index.html
    }
    pathname = "." + pathname; //最前面補上一個點表示相對路徑
    fs.stat(pathname, function(err,stats) {
        if (!err) {
            if (stats.isFile()) {
                response.writeHead(200, {
                    "Content-Type": mime.getType(pathname)
                });
                fs.readFile(pathname, function(err, data) {
                    if (!err) {
                        response.write(data);
                    } else {
                        console.log(err);
                    }
                    response.end();
                });
            } else {
                notFound(); 
            }
        } else {
            notFound();
        }
    });
    function notFound() {
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }
}).listen(process.env.PORT || 3000);
