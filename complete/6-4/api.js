var url = require("url");
var number;
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    if (pathname === "/api/") {
        if (!number) {
            number = ~~(Math.random() * 100);
        }
        var num = query.num || 0;
        var output = {};
        if (num > number) {
            output.result = "down";
        } else if (num < number) {
            output.result = "up";
        } else {
            output.success = true;
            number = ~~(Math.random() * 100);
        }
        response.writeHead(200,{
            "Content-Type": "application/json; charset=utf-8"
        });
        response.write(JSON.stringify(output));
        response.end();
    }
};