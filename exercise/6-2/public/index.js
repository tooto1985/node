$(function() {
    $.getJSON("/api/", function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<img src=\"" + data[i][0] + "\" title=\"" + data[i][1] + "\">";
        }
        $("#list").html(html);
    });
    function getTips() {
        $.getJSON("/api/tips/", function(data) {
            $("#box p").text(data);
        });
    }
    $(document).click(function() {
        $("#box").fadeOut();
    });
    $("#btn").click(function(e) {
        getTips();
        $("#box").fadeIn();
        e.stopPropagation();
    });
    $("#box").click(function(e) {
        e.stopPropagation();
    });
    getTips();
});