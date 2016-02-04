var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    var html = `<html>
<head>
<style>
    div {
        color:green;
        font-size:50px;
        cursor:pointer;
    }
</style>
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script>
    $(function() {
        $("div").click(function() {
            alert("我被按下了!")
        });
    });
</script>
</head>
<body>
    <div>請按我!</div>
</body>
</html>`;
    response.write(html);
    response.end();
}).listen(process.env.PORT || 3000);
