$(function() {
	$("#myform").submit(function(e) {
		$.post("/api/?format=" + $("#type").val(),{username:$("#username").val()},function(data) {
			alert(data.message);
		},"json");
		e.preventDefault();
	});
});