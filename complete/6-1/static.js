var fs = require("fs");
var url = require("url");
var mime = require("mime");
var crypto = require("crypto");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (!response.finished && request.method !== "POST") {
        if (pathname.endsWith("/")) {
            pathname += "index.html"; //若無帶入檔名預設為index.html
        } else {
            var paths = pathname.split("/").pop();
            if (paths.indexOf(".") === -1) {
                response.writeHead(301, {
                    "Location": pathname + "/" + (url.parse(request.url).search || "")
                });
                response.end();
                return;
            }
        }
        pathname = (process.argv[2] || "./public") + pathname; //若有傳入參數則使用參數的路徑
        pathname = decodeURI(pathname);
        fs.stat(pathname, function(err,stats) {
            if (!err) {
                if (stats.isFile()) {
                    fs.readFile(pathname, function(err, data) {
                        if (!err) {
                            var hash = crypto.createHash('sha1').update(data).digest('base64');
                            if (request.headers['if-none-match'] == hash) {
                                response.writeHead(304);
                                response.end();
                                return;
                            }
                            response.writeHead(200, {
                                "Content-Type": mime.getType(pathname),
                                "Etag": hash
                            });
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
    }
};