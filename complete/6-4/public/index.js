$(function() {
    $("#num").keyup(function(e) {
        if (e.keyCode === 13) {
            var value = parseInt($(this).val());
            $.getJSON("/api/", {
                num: value
            }, function(data) {
                if (data.result === "down") {
                    $("span").text(function(index, oldtext) {
                        return oldtext.split("~")[0] + "~" + (value - 1);
                    });
                } else if (data.result === "up") {
                    $("span").text(function(index, oldtext) {
                        return (value + 1) + "~" + oldtext.split("~")[1];
                    });
                }
                if (data.success) {
                    alert("恭喜猜中了是" + value);
                    $("span").text("0~99");
                }
                $("#num").val("");
            });
        }
    });
});