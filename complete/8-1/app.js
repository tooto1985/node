var http = require("http");
var url = require("url");
var Cookies = require("cookies");
http.createServer(function(request, response) {
    var cookies = new Cookies(request, response);
    var query = url.parse(request.url, true).query;
    var myname = "";
    if (query.myname) {
        cookies.set("myname", query.myname, {httpOnly:false});
        myname = query.myname;
    } else {
        if (cookies.get("myname")) {
            myname = cookies.get("myname");
        }
    }
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("myname=" + myname);
    response.end();
}).listen(process.env.PORT || 3000);
