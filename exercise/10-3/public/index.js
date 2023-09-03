$(function() {
    var oldder;
    var current = 0;

    function getArticle(num, fetch) {
        $.getJSON("./api", {
                fetch: fetch, //一次抓取幾筆
                num: num //抓取大於此編號
            }, function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += "<div class=\"article\">";
                    html += "<div class=\"title\">" + data[i].title + "</div>";
                    html += "<div class=\"content\">" + data[i].content + "</div>";
                    html += "</div>";
                    current = data[i].num;
                }
                $(".box").append(html);
            });
    }
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(document).height() - $(window).height() - 100) {
            if (oldder != current) {
                getArticle(current, 3);
                oldder = current;
            }
        }
    });
    getArticle(current, 5);
});