var http = require("http");


http.createServer(function(request, response) {
    var contentType;
    
    var routes = {
        "/": function() {
            contentType = "text/html";
            return "./index.html";
        },
        "/index.css": function() {
            contentType = "text/css";
            return "./index.css";
        },
        "/index.js": function() {
            contentType = "application/x-javascript";
            return "./index.js";
        },
        "/index.png": function() {
            contentType = "image/png";
            return "./index.png";
        }
    };


















}).listen(process.env.PORT || 3000);
