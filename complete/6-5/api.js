var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    var format = {
        "json": function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify({
                message: "hello " + query.username
            }));
            response.end();
        }
    };
    if (pathname === "/api/" && query.format && typeof format[query.format] === "function") {
        format[query.format]();
    }
}
