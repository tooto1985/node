var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    if (pathname === "/api/") {
        response.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });
        var data = [
            ["images/poster1.jpg", "images/poster2.jpg", "images/poster3.jpg", "images/poster4.jpg"],
            ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg"],
            ["images/flower1.jpg", "images/flower2.jpg", "images/flower3.jpg"],
            ["images/view1.jpg", "images/view2.jpg"]
        ];
        response.write(JSON.stringify(data[parseInt(query.id)]));
        response.end();
    }
};