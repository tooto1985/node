var fs = require("fs");
var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url,true).query;
    if (pathname === "/api/") {
        response.writeHead(200,{
            "Content-Type":"application/json; charset=utf-8"
        });
        response.write(fs.readFileSync("./data" + query.id + ".json"));
        response.end();
    }
};