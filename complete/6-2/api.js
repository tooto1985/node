var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if(pathname === "/api/tips/") {
        response.writeHead(200,{
            "Content-Type":"application/json; charset=utf-8"
        });
        var tips=[
            "隨機顯示提示訊息",
            "隨時可點選開啟提示",
            "滑鼠滑入照片顯示說明文字"
        ];
        var tip = tips[~~(Math.random()*tips.length)]; //Math.floor
        response.write(JSON.stringify(tip));
        response.end();
    }
};