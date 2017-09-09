var formidable = require("formidable");
var url = require("url");
var fs = require("fs");
fs.stat("./upload/", function(err, stats) {
    if(err) {
        fs.mkdir("./upload/" , function() {
            console.log("create upload folder.");
        });
    }
});
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/upload/" && request.method === "POST") {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./upload/";
        form.on("file", function(field, file) {
            fs.rename(file.path, "./upload/" + file.name);
        });
        form.on("field", function(field, value) {
            request.body = request.body || {};
            request.body[field] = value;
        });
        form.on("end", function() {
            response.writeHead(200,{
                "Content-Type":"text/html; charset=utf-8"
            });
            response.write("上傳成功，收到訊息：" + request.body.content);
            response.end();
        });
        form.parse(request);
    }
};