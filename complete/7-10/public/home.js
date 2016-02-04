$(function() {
    $("form").submit(function() {
        var files = new FormData(this);
        $.ajax({
            url: "/upload",
            type: "POST",
            data: files,
            processData: false,
            contentType: false,
            success: function(data) {
                alert("completed");
            }
        });
        return false;
    });
});