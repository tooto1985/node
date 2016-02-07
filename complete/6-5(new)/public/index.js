$(function() {
	var isSuccess = false;
	$("#num").keyup(function(e) {
		if (e.keyCode === 13) {
			if (isSuccess) {
				$("#list").html("");
				isSuccess = false;
			}
			$.getJSON("/api/", {num: $(this).val()}, function(data) {
				$("#list").append("<div>" + data.message + "</div>");
				if (data.success) {
					isSuccess = true;
				}
			});
			$(this).val("");
		}
	});
});