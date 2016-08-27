$(function() {
    var sid=[];
    function show(index) {
        $.getJSON("/api/", {id:index}, function(data) {
            sid.forEach(function(id) {
                clearInterval(id);
            });
            sid=[];
            $(".inbox").css("left", 0);
            var html = "";
            var navi = "";
            for (var i = 0; i < data.length; i++) {
                html += "<div>";
                html += "<img src=\"" + data[i] + "\">";
                html += "</div>";
                navi += "<span";
                if (i == 0) {
                    navi += " class=\"active\"";
                }
                navi += "></span>";
            }
            $(".inbox").html(html);
            $(".navi").html(navi);
            $(".inbox").append($(".inbox>div").first().clone());
            var index = 0;
            function run() {
                if (!$(".inbox").is(":animated")) {
                    $(".inbox").animate({left: "-=800"}, function() {
                        if (index >= data.length - 1) {
                            index = -1;
                            $(this).css("left", 0);
                        }
                        index++;
                        dot();
                    });
                }
            }
            sid.push(setInterval(run, 2000));
            $(".inbox,.navi,.prev,.next").off("mouseenter mouseleave").hover(function() {
                sid.forEach(function(id) {
                    clearInterval(id);
                });
                sid=[];
            },function(e) {
                console.log("push")
                sid.push(setInterval(run, 2000));
            });
            function dot() {
                $(".navi>span.active").removeClass();
                $(".navi>span").eq(index).addClass("active");
            }
            function back() {
                if (!$(".inbox").is(":animated")) {
                    if (index <= 0) {
                        index = data.length;
                        $(".inbox").css("left", index * -800);
                    }
                    $(".inbox").animate({left: "+=800"}, function() {
                        index--;
                        dot();
                    });
                }
            }
            $(".next").off("click").click(run);
            $(".prev").off("click").click(back);
            $(".navi>span").off("click").click(function() {
                index = $(this).index();
                $(".inbox").animate({left: index * -800}, dot);
            });
        });
    }
    $(".list img").click(function() {
        show($(this).index());
    }).first().click();
});