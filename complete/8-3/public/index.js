$(function() {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                var c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
    $(".tooltip").hide();
    $(".form-input").focus(function() {
        $(".tooltip").fadeOut(250);
        $("." + $(this).attr("tooltip-class")).fadeIn(500);
    });
    $(".form-input").blur(function() {
        $(".tooltip").fadeOut(250);
    });
    $(".login-button").click(function(event) {
        event.preventDefault();
    });
    $(".login-button,.loading").click(function() {
        if ($(".login-form").css("transform") == "none") {
            $(".login-form").css("transform", "rotateY(-180deg)");
            $(".loading").css("transform", "rotateY(0deg)");
            var delay = 600;
            setTimeout(function() {
                $(".loading-spinner-large").css("display", "block");
                $(".loading-spinner-small").css("display", "block");
            }, delay);
            if ($(".remember-checkbox").is(":checked")) {
                setCookie("username", $("#username").val(), 7);
            } else {
                setCookie("username", null, -1);
            }
        } else {
            $(".login-form").css("transform", "");
            $(".loading").css("transform", "");
            var delay = 600;
            setTimeout(function() {
                $(".loading-spinner-large").css("display", "none");
                $(".loading-spinner-small").css("display", "none");
            }, delay);
        }
    });
    if (getCookie("username")) {
        $("#username").val(getCookie("username"));
        $(".remember-checkbox").attr("checked", true);
    }
});