var url = require("url");
var number;
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    if (pathname === "/api/") {
        if (!number) {
            number = ~~(Math.random() * 10000);
        }
        var num = query.num || 0;
        var output = {};
        if (num > number) {
            output.message = "比" + num + "小";
        } else if (num < number) {
            output.message = "比" + num + "大";
        } else {
            output.message = "恭喜猜中是" + num + "了";
            output.success = true;
            number = ~~(Math.random() * 10000);
        }
        response.writeHead(200,{
            "Content-Type": "application/json"
        });
        response.write(JSON.stringify(output));
        response.end();
    }
}