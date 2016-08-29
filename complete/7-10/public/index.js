$(function() {
    $("form").submit(function() {
        var files = new FormData(this);
        $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                $(".result").text("");
                $(".txt").text("0%");
                $(".bar").remove();
                $(".progress").append("<div class=\"bar\"></div>");
                xhr.upload.addEventListener("progress", function(evt) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100) + "%";
                    $(".txt").text(percentComplete);
                    $(".bar").css("width", percentComplete);
                }, false);
                return xhr;
            },
            url: "/upload",
            type: "POST",
            data: files,
            processData: false,
            contentType: false,
            success: function(data) {
                $(".result").text(data);
            }
        });
        return false;
    });
});