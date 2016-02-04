$(function() {
	$("#myform").submit(function(e) {
		$.get("/api/",{format:"json",username:$("#username").val()},function(data) {
			alert(data.message);
		},"json");
		e.preventDefault();
	});
});