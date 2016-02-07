var util = require("util");
var url = require("url");
var number;
module.exports = function(request, response) {
	var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url,true).query;
    if (pathname === "/api/") {
        response.writeHead(200,{
            "Content-Type":"application/json"
        });
        response.write(JSON.stringify(["John","Mark"]));
        response.end();
    }
    console.log(util.inspect(query) + " in " + pathname);
}