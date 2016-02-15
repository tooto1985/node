var url = require("url");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/") {
        response.writeHead(200,{
            "Content-Type":"application/json"
        });
        response.write(JSON.stringify([
            [
                "images/image1.jpg",
                "台北電腦應用展開幕，參觀的民眾真的很多喔。"
            ],
            [
                "images/image2.jpg",
                "剛進大門口就好多人，擠的水洩不通。"
            ],
            [
                "images/image3.jpg",
                "大家趁電腦展撿便宜，詢問的人潮絡繹不絕。"
            ]
        ]));
        response.end();
    }
    if(pathname === "/api/tips/") {
        response.writeHead(200,{
            "Content-Type":"application/json"
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
}