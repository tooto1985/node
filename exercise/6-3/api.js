
var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname === "/api/") {
        response.writeHead(200,{
            "Content-Type":"application/json"
        });
        response.write(JSON.stringify(["John","Mark"]));
        response.end();
    }

}