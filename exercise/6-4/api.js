var url = require("url");

module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    if (pathname === "/api/") {



















    }
};