var url = require("url");

module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var format = {
        "json": function() {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write(JSON.stringify({
                message: "hello " + 
            }));
            response.end();
        }
    };
    








    
}
