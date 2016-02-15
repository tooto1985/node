var http = require("http");


http.createServer(function(request, response) {
    var contentType;
    
    var routes = {
        "/": function() {
            contentType = "text/html";
            return fs.readFileSync("./index.html");
        },
        "/index.css": function() {
            contentType = "text/css";
            return fs.readFileSync("./index.css");
        },
        "/index.js": function() {
            contentType = "application/x-javascript";
            return fs.readFileSync("./index.js");
        },
        "/index.png": function() {
            contentType = "image/png";
            return fs.readFileSync("./index.png");
        }
    };












}).listen(process.env.PORT || 3000);
