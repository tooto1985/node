var http = require("http");
http.createServer(function(request, response) {
    var html="", contentType="";
    if (request.url === "/") {
        contentType = "text/html";
        html = `<html>
<head>
<meta charset="UTF-8">
<link type="text/css" rel="stylesheet" href="index.css">
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="index.js"></script>
</head>
<body>
    <div>請按我!</div>
</body>
</html>`;
    } else if (request.url === "/index.css") {
        contentType = "text/css";
        html = `div {
    color:green;
    font-size:50px;
    cursor:pointer;
}`;
    } else if (request.url === "/index.js") {
        contentType = "application/x-javascript";
        html = `$(function() {
    $("div").click(function() {
        alert("我被按下了!");
    });
});`;
    }
    response.writeHead(200, {
        "Content-Type": contentType
    });
    response.write(html);
    response.end();
}).listen(process.env.PORT || 3000);