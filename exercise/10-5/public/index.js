$(function() {
    var socket = io();
    function sendMessage(message) {
        var data = $("#name").val() + "說：" + message;
        socket.emit("send", data);
        showMessage(data);
        $("#message").val("");
    }
    function showMessage(data) {
        $(".box").append("<div>" + data + "</div>");
        $(".box").animate({ "scrollTop": $(".box").prop("scrollHeight") - $(".box").height() }, 200);
    }
    socket.on("receive",showMessage);
    $("#send").click(function() {
        sendMessage($("#message").val());
    });
    $("#message").keyup(function(e) {
        if (e.keyCode == 13) {
            sendMessage($("#message").val());
        }
    });
});