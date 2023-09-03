$(function() {
    $(":button").click(function() {
        var $this = $(this);
        var opt = $this.val().substr(0, 1) === "+" ? "add" : "minus";
        var val = $this.val().substr(1);
        $.getJSON("/" + opt + "/" + val, function(num) {
            odometer.innerHTML = num;
        });
    });
    $.getJSON("/def/0", function(num) {
        odometer.innerHTML = num;
    });
});